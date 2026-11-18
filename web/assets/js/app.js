/* HANDSLab — 화면 동작
   데이터는 assets/data/hands.js(window.HANDSLAB_DATA)에서 읽는다.
   카드·위키·관계 보기는 아래 S(상태) 하나를 함께 쓴다. */
(function () {
  'use strict';

  const DATA = window.HANDSLAB_DATA;
  if (!DATA) return;
  const HANDS = DATA.hands;
  const byId = new Map(HANDS.map((h) => [h.id, h]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const NA = '<span class="na">미확인</span>';
  const val = (v) => (v === null || v === undefined || v === '' ? NA : esc(v));
  const short = (t) => (t ? t.replace(/^약\s*/, '').replace(/\s*\(.*$/, '') : t);
  const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return u; } };
  const activeText = (h) => (h.activeDof == null ? null : h.activeDof + (h.activeDofNote ? ' (' + h.activeDofNote + ')' : ''));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // 노션 '특징'을 항목별로 나눈 목록은 문장 대신 짧은 태그로 보여 준다
  const tags = (list) => (list && list.length ? `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : NA);
  const FEATURE_GROUPS = [['drive', '구동 방식'], ['sensors', '센서'], ['io', '통신·SW'], ['control', '제어'], ['notes', '주요 특징']];
  const creditHTML = (h, cls) => (h.photo ? `<p class="${cls}">사진 출처 · <a href="${esc(h.photo.creditUrl)}" target="_blank" rel="noopener noreferrer">${esc(h.photo.creditName)}<span class="sr-only"> 제조사 페이지, 새 창</span></a> <span class="host">${esc(host(h.photo.creditUrl))} ↗</span></p>` : '');

  /* ── 상태 ─────────────────────────────────────────── */
  const MAX_CMP = 4;
  const S = { view: 'wiki', q: '', kinds: new Set(), country: '', maker: '', sort: 'model', dir: 1, cmp: [], basis: 'maker' };
  const SORT_DIR = { model: 1, maker: 1, country: 1, kind: 1, activeDof: -1, passiveDof: -1, totalDof: -1, joints: -1, actuators: -1, fingers: -1, weightG: 1 };
  const KINDS = ['5지형 로봇핸드', '4지형 로봇핸드', '3지형 로봇핸드', '비교용 그리퍼'];

  function readUrl() {
    const p = new URLSearchParams(location.search);
    if (['cards', 'wiki'].includes(p.get('v'))) S.view = p.get('v');   // 주소에 적힌 보기는 따르고, 없으면 전체 목록
    S.q = p.get('q') || '';
    (p.get('k') || '').split(',').forEach((k) => { if (KINDS.includes(k)) S.kinds.add(k); });
    S.country = p.get('c') || '';
    S.maker = p.get('m') || '';
    if (p.get('s') in SORT_DIR) { S.sort = p.get('s'); S.dir = p.get('d') === 'desc' ? -1 : p.get('d') === 'asc' ? 1 : SORT_DIR[S.sort]; }
    S.cmp = (p.get('cmp') || '').split(',').filter((id) => byId.has(id)).slice(0, MAX_CMP);
    if (['maker', 'country', 'both', 'kind'].includes(p.get('b'))) S.basis = p.get('b');
  }
  function writeUrl() {
    const p = new URLSearchParams();
    if (S.view !== 'wiki') p.set('v', S.view);
    if (S.q) p.set('q', S.q);
    if (S.kinds.size) p.set('k', [...S.kinds].join(','));
    if (S.country) p.set('c', S.country);
    if (S.maker) p.set('m', S.maker);
    if (S.sort !== 'model' || S.dir !== 1) { p.set('s', S.sort); if (S.dir !== SORT_DIR[S.sort]) p.set('d', S.dir === 1 ? 'asc' : 'desc'); }
    if (S.cmp.length) p.set('cmp', S.cmp.join(','));
    if (S.basis !== 'maker') p.set('b', S.basis);
    const qs = p.toString();
    try { history.replaceState(history.state, '', location.pathname + (qs ? '?' + qs : '') + location.hash); } catch (e) { /* file:// 등 */ }
  }

  /* ── 검색·필터·정렬 ───────────────────────────────── */
  HANDS.forEach((h) => { h._text = [h.model, h.maker, h.makerGroup, h.location, h.countries.join(' '), h.kind, h.specs, ...FEATURE_GROUPS.flatMap(([k]) => h[k])].join(' ').toLowerCase(); });
  const sortVal = (h, key) => (key === 'country' ? h.countries[0] : key === 'maker' ? h.makerGroup : h[key]);
  function filtered() {
    const terms = S.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const list = HANDS.filter((h) =>
      terms.every((t) => h._text.includes(t)) &&
      (!S.kinds.size || S.kinds.has(h.kind)) &&
      (!S.country || h.countries.includes(S.country)) &&
      (!S.maker || h.makerGroup === S.maker));
    const key = S.sort, dir = S.dir;
    const cmpText = (a, b) => String(a).localeCompare(String(b), 'ko', { numeric: true, sensitivity: 'base' });
    list.sort((a, b) => {
      const x = sortVal(a, key), y = sortVal(b, key);
      if (x == null && y == null) return cmpText(a.model, b.model);
      if (x == null) return 1;            // 미확인은 항상 뒤로
      if (y == null) return -1;
      return (typeof x === 'number' ? x - y : cmpText(x, y)) * dir || cmpText(a.model, b.model);
    });
    return list;
  }
  const hasFilters = () => S.q || S.kinds.size || S.country || S.maker;

  /* ── 히어로 ───────────────────────────────────────── */
  // 100개 모델 슬라이더. 검증된 사진은 그대로 쓰고 사진이 없는 모델은 정보 카드로 보여 준다.
  // 끌거나(마우스) 밀어서(터치) 또는 이전/다음 버튼·좌우 화살표 키로 넘긴다. 자동으로 넘어가지 않는다.
  const HERO_FEATURES = ['sharpa-wave-w01', 'allegro-hand-v6-f', 'qb-softhand-research', 'dex5-1', 'dex2-5', 'allegro-hand-v4'];
  const STRIP_DEPTH = [0.42, 0.3, 0.5, 0.34, 0.46];           // 포인터를 따라 움직이는 정도(주제품은 1)
  const two = (n) => String(n).padStart(2, '0');
  const arrow = (d) => `<svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  function renderHero() {
    const preferred = HERO_FEATURES.map((id) => byId.get(id)).filter(Boolean);
    const rest = HANDS.filter((h) => !HERO_FEATURES.includes(h.id)).sort((a, b) =>
      Number(Boolean(b.photo)) - Number(Boolean(a.photo)) || a.model.localeCompare(b.model, 'en', {numeric: true}));
    const list = [...preferred, ...rest];
    const n = list.length;
    if (!n) return;
    $('#heroFeature').innerHTML = `<div class="feature" id="feature" role="group" aria-roledescription="carousel" aria-label="대표 로봇핸드 ${n}종. 좌우로 넘겨 볼 수 있습니다.">
      <a class="feature-link" id="featureLink" href="#/hand/${list[0].id}" draggable="false">
        <span class="feature-photo" data-depth="1"><span class="feature-track" id="featureTrack">${list.map((h, i) =>
          heroSlide(h, i)).join('')}</span></span>
        <span class="sr-only" id="featureName"></span>
      </a>
      <div class="feature-bar">
        <div class="feature-ctrl">
          <button type="button" class="feature-nav" data-step="-1" aria-label="이전 로봇핸드">${arrow('M12 4 6 10l6 6')}</button>
          <span class="feature-count" id="featureCount" aria-hidden="true"></span>
          <button type="button" class="feature-nav" data-step="1" aria-label="다음 로봇핸드">${arrow('m8 4 6 6-6 6')}</button>
        </div>
        <a class="feature-cap" id="featureCap" href="#/hand/${list[0].id}"><span class="maker"></span><b></b><span class="go" aria-hidden="true">→</span></a>
      </div>
      <p class="feature-hint" aria-hidden="true">Drag to explore · ${n} models</p>
      <p class="sr-only" aria-live="polite" id="featureLive"></p>
    </div>`;
    $('#heroStrip').innerHTML = list.slice(1, 6).map((h, i) => `<li class="strip-item" data-feature="${i + 1}"><a class="strip-link" href="#/hand/${h.id}">
        <span class="strip-photo" data-depth="${STRIP_DEPTH[i % STRIP_DEPTH.length]}"><img src="${h.photo.src}" width="${h.photo.w}" height="${h.photo.h}" alt="" decoding="async"></span>
        <span class="strip-cap"><span class="idx">${two(i + 2)}</span><span class="model">${esc(h.model)}</span><span class="maker">${esc(h.makerGroup.replace(/\s*\(.*\)$/, ''))}</span><span class="sr-only"> 상세 보기</span></span>
      </a></li>`).join('') + `<li class="strip-more"><a href="#explore" data-view-link="wiki"><span>전체 ${DATA.meta.count}종 <span class="arrow" aria-hidden="true">↓</span></span><small>전체 목록에서 보기</small></a></li>`;
    // 흐르는 띠: 모델명이 끊김 없이 이어지도록 같은 목록을 두 번 붙인다(장식용이라 화면낭독기에서는 숨김)
    const run = HANDS.map((h) => `<span>${esc(h.model)}</span><i aria-hidden="true">✦</i>`).join('');
    const ticker = $('#heroTicker');
    if (ticker) ticker.innerHTML = `<div class="ticker-track">${run}${run}</div>`;
    initCarousel(list);
    initParallax();
  }
  function heroSlide(h, i) {
    const media = h.photo
      ? `<img src="${h.photo.src}" width="${h.photo.w}" height="${h.photo.h}" alt="${esc(h.model)}" draggable="false" decoding="async"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>`
      : `<span class="feature-missing"><span class="feature-missing-label">PHOTO NOT AVAILABLE</span><strong>${esc(h.model)}</strong><span>${esc(h.maker)}</span><span class="feature-missing-meta">${esc(h.kind)} · ${esc(h.location || h.countries.join(' · '))}</span><span class="feature-missing-note">확인된 제품 사진이 아직 없습니다.<br>클릭하면 사양과 제조사 출처를 볼 수 있습니다.</span></span>`;
    return `<span class="feature-img feature-slide${i === 0 ? ' is-active' : ''}" data-surface="${h.photo && !h.photo.alpha ? 'photo' : 'clear'}" aria-hidden="${i !== 0}">${media}</span>`;
  }
  function initCarousel(list) {
    const n = list.length, box = $('#feature'), link = $('#featureLink'), cap = $('#featureCap'), track = $('#featureTrack');
    const imgs = $$('.feature-img', box);
    let cur = 0;
    function sync(announce) {
      const h = list[cur], href = '#/hand/' + h.id;
      link.setAttribute('href', href); cap.setAttribute('href', href);
      $('#featureName').textContent = `${h.maker} ${h.model} 상세 보기`;
      $('.maker', cap).textContent = h.maker; $('b', cap).textContent = h.model;
      $('#featureCount').textContent = `${two(cur + 1)} / ${two(n)}`;
      $$('#heroStrip .strip-item').forEach((li) => li.classList.toggle('is-current', +li.dataset.feature === cur));
      if (announce) $('#featureLive').textContent = `${cur + 1} / ${n} · ${h.model}, ${h.maker}`;
    }
    function show(i, dir) {
      i = (i + n) % n;
      if (i === cur) return;
      const from = imgs[cur], to = imgs[i];
      to.classList.add('no-anim'); to.style.setProperty('--off', dir * 44 + 'px'); void to.offsetWidth; to.classList.remove('no-anim');   // 들어올 쪽에 먼저 놓는다
      from.style.setProperty('--off', -dir * 44 + 'px'); from.classList.remove('is-active'); from.setAttribute('aria-hidden', 'true');
      to.style.setProperty('--off', '0px'); to.classList.add('is-active'); to.setAttribute('aria-hidden', 'false');
      cur = i; sync(true);
    }
    box.addEventListener('click', (e) => { const b = e.target.closest('[data-step]'); if (b) show(cur + +b.dataset.step, +b.dataset.step); });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); show(cur + 1, 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(cur - 1, -1); }
    });
    // 끌기/밀기. 8px 넘게 가로로 움직였을 때만 끌기로 보고, 그 뒤의 클릭은 막아 상세 화면이 잘못 열리지 않게 한다.
    let start = null, dragging = false, suppress = false;
    link.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse' && e.button !== 0) return; start = { x: e.clientX, y: e.clientY, id: e.pointerId }; dragging = false; });
    link.addEventListener('pointermove', (e) => {
      if (!start || e.pointerId !== start.id) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!dragging) {
        if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy)) return;
        dragging = true; track.classList.add('dragging');
        try { link.setPointerCapture(e.pointerId); } catch (err) { /* 지원하지 않는 환경 */ }
      }
      track.style.setProperty('--dx', (dx * 0.55).toFixed(1) + 'px');
    });
    const end = (e) => {
      if (!start || e.pointerId !== start.id) return;
      const dx = e.clientX - start.x, was = dragging;
      start = null; dragging = false; track.classList.remove('dragging'); track.style.setProperty('--dx', '0px');
      if (!was) return;
      suppress = true; setTimeout(() => { suppress = false; }, 400);
      if (e.type === 'pointerup' && Math.abs(dx) >= 36) show(cur + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    };
    link.addEventListener('pointerup', end);
    link.addEventListener('pointercancel', end);
    link.addEventListener('click', (e) => { if (suppress) { e.preventDefault(); e.stopPropagation(); suppress = false; } }, true);
    link.addEventListener('dragstart', (e) => e.preventDefault());
    sync(false);
  }
  function initParallax() {
    const hero = $('#top');
    const layers = $$('[data-depth]', hero);
    const mq = window.matchMedia('(min-width: 1100px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    function frame() {
      cx += (tx - cx) * 0.075; cy += (ty - cy) * 0.075;          // 목표 위치로 조금씩 따라간다
      const sy = Math.min(window.scrollY, hero.offsetHeight);
      layers.forEach((l) => {
        const d = +l.dataset.depth;
        l.style.setProperty('--px', (-cx * d * 26).toFixed(2) + 'px');
        l.style.setProperty('--py', (-cy * d * 18 - sy * d * 0.09).toFixed(2) + 'px');
      });
      raf = Math.abs(tx - cx) > 0.0015 || Math.abs(ty - cy) > 0.0015 ? requestAnimationFrame(frame) : 0;
    }
    const kick = () => { if (!raf && mq.matches) raf = requestAnimationFrame(frame); };
    hero.addEventListener('pointermove', (e) => {
      if (!mq.matches || e.pointerType === 'touch') return;
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      kick();
    });
    hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
    window.addEventListener('scroll', () => { if (window.scrollY < hero.offsetHeight) kick(); }, { passive: true });
    const reset = () => { if (!mq.matches) { cancelAnimationFrame(raf); raf = 0; tx = ty = cx = cy = 0; layers.forEach((l) => { l.style.removeProperty('--px'); l.style.removeProperty('--py'); }); } };
    mq.addEventListener ? mq.addEventListener('change', reset) : mq.addListener(reset);
  }

  /* ── 스크롤 진행에 따른 배경 전환 ─────────────────── */
  function initScrollTone() {
    const root = document.documentElement, header = $('#siteHeader'), theme = $('meta[name="theme-color"]');
    const hero = $('#top'), intro = $('#intro'), explore = $('#explore');
    const COLORS = [[5, 11, 32], [35, 57, 91], [35, 57, 91], [211, 223, 234], [255, 255, 255]];   // #050B20 → 남색 → 밝은 블루그레이 → 흰색
    let stops = [], ticking = false;
    function measure() {
      const vh = window.innerHeight, top = (el) => el.getBoundingClientRect().top + window.scrollY;
      const it = top(intro), ih = intro.offsetHeight, et = top(explore);
      const raw = [hero.offsetHeight * 0.3, it - vh * 0.5, it + ih * 0.55 - vh * 0.5, et - vh * 0.5, et - vh * 0.08];
      stops = raw.map((v, i) => Math.max(v, 0));
      for (let i = 1; i < stops.length; i++) if (stops[i] <= stops[i - 1]) stops[i] = stops[i - 1] + 1;
      update();
    }
    const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    function update() {
      ticking = false;
      const y = window.scrollY;
      let rgb = COLORS[COLORS.length - 1];
      if (y <= stops[0]) rgb = COLORS[0];
      else for (let i = 1; i < stops.length; i++) {
        if (y <= stops[i]) {
          const t = (y - stops[i - 1]) / (stops[i] - stops[i - 1]);
          const e = t * t * (3 - 2 * t);
          rgb = COLORS[i].map((c, k) => Math.round(COLORS[i - 1][k] + (c - COLORS[i - 1][k]) * e));
          break;
        }
      }
      const css = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      root.style.setProperty('--page-bg', css);
      // 배경 밝기에 맞춰 대비가 더 큰 쪽(밝은 글자/어두운 글자)을 고른다
      const L = 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
      const tone = 1.05 / (L + 0.05) >= (L + 0.05) / 0.0607 ? 'dark' : 'light';
      if (root.dataset.tone !== tone) root.dataset.tone = tone;
      if (theme) theme.setAttribute('content', css);
      header.classList.toggle('scrolled', y > 8);
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);
    measure();
  }

  /* ── 도구 막대 ────────────────────────────────────── */
  function count(fn) { const m = new Map(); HANDS.forEach((h) => [].concat(fn(h)).forEach((k) => m.set(k, (m.get(k) || 0) + 1))); return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ko')); }
  function initToolbar() {
    $('#catalogFacts').innerHTML = [['모델', DATA.meta.count], ['제조사·기관', DATA.meta.makers], ['국가', DATA.meta.countries]]
      .map(([k, v]) => `<div><dt>${k}</dt><dd data-count="${v}">${v}</dd></div>`).join('');
    // 전체 수와 사진 수를 탭·버튼에 그대로 적어, 사진 갤러리만 보고 전체로 오해하지 않게 한다
    $('#tab-wiki').textContent = `전체 목록 · ${DATA.meta.count}`;
    $('#tab-cards').textContent = `Graphical Explorer · ${DATA.meta.count}`;
    $('#ctaAll').textContent = `전체 ${DATA.meta.count}개 보기`;
    $('#ctaPhoto').textContent = `갤러리 보기 · ${DATA.meta.count}종`;
    const kc = new Map(count((h) => h.kind));
    $('#kindChips').innerHTML = KINDS.map((k) => `<button type="button" class="chip" data-kind="${k}" aria-pressed="false">${k.replace(' 로봇핸드', '')}<span class="n">${kc.get(k) || 0}</span></button>`).join('');
    $('#fCountry').insertAdjacentHTML('beforeend', count((h) => h.countries).map(([k, n]) => `<option value="${esc(k)}">${esc(k)} (${n})</option>`).join(''));
    $('#fMaker').insertAdjacentHTML('beforeend', count((h) => h.makerGroup).map(([k, n]) => `<option value="${esc(k)}">${esc(k)} (${n})</option>`).join(''));
    $('#fSort').insertAdjacentHTML('beforeend', [['country', '국가'], ['kind', '유형'], ['joints', '관절 수 많은 순'], ['actuators', '구동기 수 많은 순']].map(([v, t]) => `<option value="${v}">${t}</option>`).join(''));

    let timer;
    $('#q').addEventListener('input', (e) => { clearTimeout(timer); timer = setTimeout(() => { S.q = e.target.value; apply(); }, 120); });
    $('#toolbar').addEventListener('submit', (e) => { e.preventDefault(); S.q = $('#q').value; apply(); });
    $('#fCountry').addEventListener('change', (e) => { S.country = e.target.value; apply(); });
    $('#fMaker').addEventListener('change', (e) => { S.maker = e.target.value; apply(); });
    $('#fSort').addEventListener('change', (e) => { S.sort = e.target.value; S.dir = SORT_DIR[S.sort]; apply(); });
    $('#chipRow').addEventListener('click', (e) => {
      const b = e.target.closest('.chip'); if (!b) return;
      if (b.dataset.kind) { S.kinds.has(b.dataset.kind) ? S.kinds.delete(b.dataset.kind) : S.kinds.add(b.dataset.kind); }
      else if (b.dataset.toggle) S[b.dataset.toggle] = !S[b.dataset.toggle];
      apply();
    });
    const reset = () => { S.q = ''; S.kinds.clear(); S.country = ''; S.maker = ''; apply(); };
    $('#resetBtn').addEventListener('click', reset);
    $('#emptyReset').addEventListener('click', reset);

    const tabs = $$('.view-switch [role="tab"]');
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => setView(t.dataset.view));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        setView(n.dataset.view); n.focus();
      });
    });
    $('#graphBasis').addEventListener('click', (e) => { const b = e.target.closest('[data-basis]'); if (b) { S.basis = b.dataset.basis; apply(); } });
  }
  function syncControls() {
    if ($('#q').value !== S.q && document.activeElement !== $('#q')) $('#q').value = S.q;
    $('#fCountry').value = S.country; $('#fMaker').value = S.maker; $('#fSort').value = S.sort;
    $$('#kindChips .chip').forEach((b) => b.setAttribute('aria-pressed', S.kinds.has(b.dataset.kind)));
    $$('[data-toggle]').forEach((b) => b.setAttribute('aria-pressed', !!S[b.dataset.toggle]));
    $('#resetBtn').hidden = !hasFilters();
    $$('.view-switch [role="tab"]').forEach((t) => { const on = t.dataset.view === S.view; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    ['cards', 'wiki', 'graph'].forEach((v) => { $('#view-' + v).hidden = v !== S.view; });
    $$('#graphBasis button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.basis === S.basis));
  }
  function setView(v) { S.view = v; apply(); }

  /* ── 렌더링 ───────────────────────────────────────── */
  let current = [];
  function apply() {
    current = filtered();
    syncControls();
    $('#resultCount').textContent = hasFilters() ? `${HANDS.length}개 중 ${current.length}개` : `전체 ${HANDS.length}개`;
    $('#emptyState').hidden = current.length > 0;
    $('#view-' + S.view).hidden = current.length === 0;
    if (S.view === 'cards') renderCards(current);
    else if (S.view === 'wiki') renderWiki(current);
    else renderGraph(current);
    renderTray();
    writeUrl();
  }
  const cmpLabel = (h, on) => `${h.model} 비교 목록${on ? '에서 빼기' : '에 추가'}`;
  // 사진은 모두 같은 밝은 바탕 위에 놓는다. 흰 배경 사진은 바탕에 섞고(blend), 색 배경 사진만 제 배경색을 쓴다.
  function photoKind(p) {
    if (p.alpha) return 'cut';
    const m = /^#(..)(..)(..)$/.exec(p.bg || '');
    return !m || (parseInt(m[1], 16) + parseInt(m[2], 16) + parseInt(m[3], 16)) / 765 > 0.93 ? 'blend' : 'own';
  }
  function mediaHTML(h, cls) {
    const p = h.photo;
    if (!p) return `<div class="${cls} none">사진 미확보</div>`;
    const k = photoKind(p);
    return `<div class="photo ${cls} ${k}"><img src="${p.src}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" alt="${esc(h.maker)} ${esc(h.model)} 제품 사진"></div>`;
  }
  const cmpBtn = (h) => { const on = S.cmp.includes(h.id); return `<button type="button" class="cmp-btn" data-cmp="${h.id}" aria-pressed="${on}" aria-label="${esc(cmpLabel(h, on))}"></button>`; };
  function renderCards(list) {
    // 사진 → 사진 출처(제조사 링크) → 모델 정보 순서. 링크 안에 링크를 넣지 않도록 사진 링크와 글 링크를 나눈다.
    $('#cardGrid').innerHTML = list.map((h, i) => {
      const spec = [h.activeDof != null ? `능동 ${h.activeDof} DoF` : h.totalDof != null ? `총 ${h.totalDof} DoF` : h.dofStated ? `표기 ${short(h.dofStated)} DoF` : null, short(h.weight)].filter(Boolean).join(' · ');
      return `<li class="g-card" style="--i:${i % 8}">
        <a class="g-link g-photo-link" href="#/hand/${h.id}" tabindex="-1" aria-hidden="true">
          ${mediaHTML(h, 'g-media')}<span class="g-index">H${two(HANDS.indexOf(h) + 1)}</span>
        </a>
        ${creditHTML(h, 'g-credit')}
        <a class="g-link" href="#/hand/${h.id}">
          <div class="g-text"><h3>${esc(h.model)}</h3><p>${esc(h.maker)}</p><p class="g-spec">${esc(spec || h.kind)}</p></div>
        </a>${cmpBtn(h)}
      </li>`;
    }).join('');
    $('#cardGrid').hidden = list.length === 0;
    revealIn($('#cardGrid'));
  }
  // 표 열: [정렬 키, 제목, 칸 종류(num=숫자, wrap=줄바꿈 허용, tags=태그 목록), 값]
  // 노션 '특징' 문장에 있던 자유도·무게·주기·힘·하중·범위·속도는 각자의 열로, 나머지는 구동·센서·통신·제어·주요 특징 태그로 나눈다.
  const COLS = [
    ['maker', '제조사', '', (h) => val(h.maker)],
    ['country', '국가', 'nw', (h) => esc(h.countries.join(', '))],
    ['kind', '유형', 'nw', (h) => esc(h.kind.replace(' 로봇핸드', ''))],
    ['fingers', '손가락', 'num', (h) => val(h.fingers)],
    ['activeDof', '능동 DoF', 'num', (h) => val(activeText(h))],
    ['passiveDof', '수동 DoF', 'num', (h) => val(h.passiveDof)],
    ['totalDof', '총 DoF', 'num', (h) => val(h.totalDof)],
    [null, '표기 DoF', 'nw', (h) => val(h.dofStated)],
    ['joints', '관절', 'num', (h) => val(h.joints)],
    ['actuators', '구동기', 'num', (h) => val(h.actuators)],
    ['weightG', '무게', 'nw', (h) => val(short(h.weight))],
    [null, '제어·통신 주기', 'nw', (h) => val(h.rate)],
    [null, 'Tip force (N)', 'wrap', (h) => val(h.tipForce)],
    [null, 'Grip force (N)', 'wrap', (h) => val(h.gripForce)],
    [null, 'Payload (kg)', 'wrap', (h) => val(h.payload)],
    [null, '기타 힘 표기', 'wrap', (h) => val(h.forceOther)],
    [null, '스트로크·파지 범위', 'wrap', (h) => val(h.stroke)],
    [null, '동작 속도', 'wrap', (h) => val(h.speed)],
    [null, '구동 방식', 'tc', (h) => tags(h.drive)],
    [null, '센서', 'tc', (h) => tags(h.sensors)],
    [null, '통신·SW', 'tc', (h) => tags(h.io)],
    [null, '제어', 'tc', (h) => tags(h.control)],
    [null, '주요 특징', 'tc wide', (h) => tags(h.notes)],
    [null, '출처', 'nw', (h) => `<a href="${esc(h.source)}" target="_blank" rel="noopener">${esc(host(h.source))}<span class="sr-only"> (${esc(h.model)} 사양 출처, 새 창)</span></a>`],
  ];
  function renderWiki(list) {
    const th = (key, label, cls) => {
      const sorted = key && S.sort === key ? ` aria-sort="${S.dir === 1 ? 'ascending' : 'descending'}"` : '';
      return `<th scope="col"${cls ? ` class="${cls}"` : ''}${sorted}>${key ? `<button type="button" data-sort="${key}">${label}</button>` : label}</th>`;
    };
    $('#wikiHead').innerHTML = '<tr>' + th('model', '모델', '') + COLS.map(([key, label, cls]) => th(key, label, cls)).join('') + '</tr>';
    $('#wikiBody').innerHTML = list.map((h) => {
      const on = S.cmp.includes(h.id);
      return `<tr>
        <th scope="row"><div class="row-head"><input type="checkbox" data-cmp="${h.id}"${on ? ' checked' : ''} aria-label="${esc(cmpLabel(h, on))}"><a class="model-link" href="#/hand/${h.id}">${esc(h.model)}</a></div></th>
        ${COLS.map(([, , cls, get]) => `<td${cls ? ` class="${cls}"` : ''}>${get(h)}</td>`).join('')}
      </tr>`;
    }).join('');
  }

  /* ── 비교 ─────────────────────────────────────────── */
  let toastTimer;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2600); }
  function toggleCmp(id) {
    const i = S.cmp.indexOf(id);
    if (i >= 0) S.cmp.splice(i, 1);
    else if (S.cmp.length >= MAX_CMP) { toast(`비교는 최대 ${MAX_CMP}개까지 담을 수 있습니다.`); syncCmpButtons(); return; }
    else S.cmp.push(id);
    syncCmpButtons(); renderTray(); writeUrl();
    if (sheetKind === 'compare') showSheet(compareHTML(), 'compare', true);
    if (sheetKind === 'detail') { const b = $('#sheetBody [data-cmp]'); if (b) { const on = S.cmp.includes(b.dataset.cmp); b.setAttribute('aria-pressed', on); b.textContent = on ? '비교 목록에 담김' : '비교에 추가'; } }
  }
  function syncCmpButtons() {
    $$('[data-cmp]').forEach((b) => {
      const h = byId.get(b.dataset.cmp), on = S.cmp.includes(b.dataset.cmp);
      if (b.type === 'checkbox') b.checked = on; else b.setAttribute('aria-pressed', on);
      if (b.hasAttribute('aria-label')) b.setAttribute('aria-label', cmpLabel(h, on));
    });
  }
  function renderTray() {
    const tray = $('#compareTray');
    tray.hidden = S.cmp.length === 0;
    $('#compareChips').innerHTML = S.cmp.map((id) => { const h = byId.get(id); return `<li><span>${esc(h.model)}</span><button type="button" data-rm="${id}" aria-label="${esc(h.model)} 빼기">×</button></li>`; }).join('');
    $('#compareGo').textContent = `비교하기 ${S.cmp.length}/${MAX_CMP}`;
  }
  const CMP_ROWS = [
    ['소재지', (h) => h.location], ['유형', (h) => h.kind], ['손가락 수', (h) => h.fingers], ['능동 DoF', activeText], ['수동 DoF', (h) => h.passiveDof], ['총 DoF', (h) => h.totalDof], ['표기 DoF', (h) => h.dofStated],
    ['관절', (h) => h.joints], ['구동기', (h) => h.actuators], ['무게', (h) => h.weight], ['제어·통신 주기', (h) => h.rate],
    ['Tip force (N)', (h) => h.tipForce], ['Grip force (N)', (h) => h.gripForce], ['Payload (kg)', (h) => h.payload], ['기타 힘 표기', (h) => h.forceOther],
    ['스트로크·파지 범위', (h) => h.stroke], ['동작 속도', (h) => h.speed],
    ...FEATURE_GROUPS.map(([k, label]) => [label, (h) => (h[k].length ? h[k] : null)]),
  ];
  const OPTIONAL_ROWS = ['기타 힘 표기', '제어·통신 주기', '표기 DoF', '수동 DoF', '스트로크·파지 범위', '동작 속도', '제어'];
  function compareHTML() {
    const list = S.cmp.map((id) => byId.get(id));
    if (!list.length) return `<div class="compare"><h2 id="sheetTitle">모델 비교</h2><p>비교할 모델이 없습니다. 카드나 표에서 ‘비교’를 눌러 최대 ${MAX_CMP}개까지 담아 보세요.</p></div>`;
    const head = list.map((h) => `<th scope="col">${mediaHTML(h, 'c-media')}<a href="#/hand/${h.id}">${esc(h.model)}</a><small>${esc(h.maker)}</small><button type="button" class="rm" data-cmp="${h.id}" aria-pressed="true" aria-label="${esc(cmpLabel(h, true))}">빼기</button></th>`).join('');
    const rows = CMP_ROWS.map(([label, get]) => {
      const vals = list.map(get);
      if (vals.every((v) => v == null) && OPTIONAL_ROWS.includes(label)) return '';
      const isList = vals.some(Array.isArray);
      const differs = !isList && list.length > 1 && new Set(vals.map((v) => String(v))).size > 1 && label !== '소재지';
      return `<tr><th scope="row">${label}</th>${vals.map((v) => `<td${differs && v != null ? ' class="diff"' : ''}>${Array.isArray(v) ? tags(v) : val(v)}</td>`).join('')}</tr>`;
    }).join('');
    const src = `<tr><th scope="row">출처</th>${list.map((h) => `<td><a href="${esc(h.source)}" target="_blank" rel="noopener">${esc(host(h.source))}</a></td>`).join('')}</tr>`;
    return `<div class="compare" style="--cols:${list.length}"><h2 id="sheetTitle">모델 비교</h2>
      <p>${list.length < 2 ? '한 개 더 담으면 나란히 비교할 수 있습니다. ' : '값이 서로 다른 항목은 옅게 표시됩니다. '}조사표 기준이며 없는 값은 미확인입니다.</p>
      <div class="compare-wrap" tabindex="0" role="region" aria-label="비교 표"><table><colgroup><col class="lab">${list.map(() => '<col>').join('')}</colgroup>
      <thead><tr><th scope="col"><span class="sr-only">항목</span></th>${head}</tr></thead><tbody>${rows}${src}</tbody></table></div></div>`;
  }

  /* ── 상세 화면 ────────────────────────────────────── */
  function detailHTML(h) {
    const p = h.photo, on = S.cmp.includes(h.id);
    const specs = [
      ['손가락 수', h.fingers], ['능동 DoF', activeText(h)],
      h.passiveDof != null ? ['수동 DoF', h.passiveDof] : null, ['총 DoF', h.totalDof],
      h.dofStated ? ['표기 DoF', h.dofStated, '능동/총 구분 없이 적힌 값'] : null,
      ['관절', h.joints], ['구동기', h.actuators], ['무게', h.weight],
      h.rate ? ['제어·통신 주기', h.rate] : null,
      ['Tip force (N)', h.tipForce], ['Grip force (N)', h.gripForce], ['Payload (kg)', h.payload],
      h.forceOther ? ['기타 힘 표기', h.forceOther, '유형이 분명하지 않은 값'] : null,
      h.stroke ? ['스트로크·파지 범위', h.stroke] : null, h.speed ? ['동작 속도', h.speed] : null,
    ].filter(Boolean);
    const groups = FEATURE_GROUPS.filter(([key]) => h[key].length);
    const siblings = HANDS.filter((x) => x.makerGroup === h.makerGroup && x.id !== h.id);
    const k = p ? photoKind(p) : 'none';
    const media = p
      ? `<figure><img src="${p.src}" width="${p.w}" height="${p.h}" alt="${esc(h.maker)} ${esc(h.model)} 제품 사진"></figure>${creditHTML(h, 'detail-credit')}`
      : `<div class="ph">확인된 제품 사진이 아직 없습니다.</div>`;
    return `<article class="detail">
      <div class="detail-media photo ${k}">${media}</div>
      <div class="detail-info">
        <p class="detail-maker">${esc(h.maker)}</p>
        <h2 id="sheetTitle">${esc(h.model)}</h2>
        <p class="detail-loc">${esc(h.location)} · ${esc(h.kind)}</p>
        <div class="detail-actions">
          <button type="button" class="btn" data-cmp="${h.id}" aria-pressed="${on}">${on ? '비교 목록에 담김' : '비교에 추가'}</button>
          <a class="btn" href="${esc(h.source)}" target="_blank" rel="noopener">제조사 자료 열기 ↗</a>
        </div>
        <dl class="spec-grid">${specs.map(([k, v, note]) => `<div><dt>${k}</dt><dd>${val(v)}${note && v != null ? `<small>${note}</small>` : ''}</dd></div>`).join('')}</dl>
        ${groups.length ? `<h3>특징 정리</h3><dl class="feat-list">${groups.map(([key, label]) => `<div><dt>${label}</dt><dd>${tags(h[key])}</dd></div>`).join('')}</dl>` : ''}
        <details class="raw"><summary>노션 조사표 원문 보기</summary><p class="detail-specs">${esc(h.specs)}</p></details>
        <h3>출처</h3>
        <ul class="src-list">
          <li><span>사양</span><a href="${esc(h.source)}" target="_blank" rel="noopener">${esc(host(h.source))}</a></li>
          ${p ? `<li><span>사진</span><a href="${esc(p.creditUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.creditName)} · ${esc(host(p.creditUrl))}</a></li>` : ''}
          ${(h.research || []).map(url => `<li><span>관련 연구</span><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(host(url))}</a></li>`).join('')}
        </ul>
        ${siblings.length ? `<h3>같은 제조사의 다른 모델</h3><div class="rel-list">${siblings.map((x) => `<a href="#/hand/${x.id}">${esc(x.model)}</a>`).join('')}</div>` : ''}
        <h3>이어서 탐색</h3>
        <div class="rel-list">
          ${h.countries.map((c) => `<a href="#explore" data-set="country" data-value="${esc(c)}">${esc(c)} 모델 모두 보기</a>`).join('')}
          <a href="#explore" data-set="maker" data-value="${esc(h.makerGroup)}">이 제조사만 보기</a>
        </div>
        <p class="detail-foot">조사표 기준입니다. 조사표에 없는 값은 미확인으로 표시하며, 구매·설계 전에는 제조사 최신 자료를 확인해 주세요.</p>
      </div>
    </article>`;
  }

  /* ── 시트(상세·비교) 열고 닫기, 주소 연결 ─────────── */
  const sheet = $('#sheet'), panel = $('#sheetPanel');
  let sheetKind = null, lastFocus = null;
  function showSheet(html, kind, keepScroll) {
    if (!sheetKind) lastFocus = document.activeElement;
    $('#sheetBody').innerHTML = html;
    sheet.hidden = false; sheetKind = kind;
    document.body.classList.add('sheet-open');
    if (!keepScroll) { panel.scrollTop = 0; panel.focus({ preventScroll: true }); }
  }
  function hideSheet() {
    if (!sheetKind) return;
    sheet.hidden = true; sheetKind = null; $('#sheetBody').innerHTML = '';
    document.body.classList.remove('sheet-open');
    document.title = BASE_TITLE;
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    else { const again = lastFocus && lastFocus.getAttribute && lastFocus.getAttribute('href'); const el = again && $(`#explore a[href="${again}"]`); if (el) el.focus({ preventScroll: true }); }
  }
  const BASE_TITLE = document.title;
  function route(to) {
    const hash = typeof to === 'string' ? to : location.hash;
    if (hash.indexOf('#/hand/') === 0) {
      const h = byId.get(decodeURIComponent(hash.slice(7)));
      if (h) { showSheet(detailHTML(h), 'detail'); document.title = `${h.model} · ${h.maker} — HANDSLab`; return; }
    } else if (hash === '#/compare') { showSheet(compareHTML(), 'compare'); document.title = '모델 비교 — HANDSLab'; return; }
    hideSheet();
  }
  // 주소를 바꾸고 화면을 맞춘다. 주소를 바꿀 수 없는 환경(미리보기 틀 등)에서도 화면 전환은 그대로 동작한다.
  function navigate(hash) {
    try { history.pushState(null, '', hash || location.pathname + location.search); } catch (e) { /* 주소 변경 불가 */ }
    route(hash || '');
  }
  // 상세 경로만 지운다. 뒤로 가기로 다시 열 수 있고, 뒤 화면의 스크롤 위치는 그대로다.
  function closeSheet() { navigate(''); }
  window.addEventListener('hashchange', () => route());
  window.addEventListener('popstate', () => route());
  document.addEventListener('keydown', (e) => {
    if (!sheetKind) return;
    if (e.key === 'Escape') { e.preventDefault(); closeSheet(); return; }
    if (e.key !== 'Tab') return;                                   // 시트 안에서만 초점이 돌게 한다
    const f = $$('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])', panel).filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* ── 문서 전체 클릭 처리 ──────────────────────────── */
  document.addEventListener('click', (e) => {
    const t = e.target;
    const cmp = t.closest('[data-cmp]');
    if (cmp) { if (cmp.type !== 'checkbox') e.preventDefault(); toggleCmp(cmp.dataset.cmp); return; }
    const rm = t.closest('[data-rm]');
    if (rm) { toggleCmp(rm.dataset.rm); return; }
    if (t.closest('[data-close]')) { closeSheet(); return; }
    const go = t.closest('a[href^="#/"]');                         // 상세·비교 화면으로 가는 링크
    if (go && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      if (moved && go.closest('#graphSvg')) { e.preventDefault(); return; }   // 그래프를 끌던 중이면 이동하지 않는다
      e.preventDefault(); navigate(go.getAttribute('href')); return;
    }
    const sort = t.closest('[data-sort]');
    if (sort) { const k = sort.dataset.sort; if (S.sort === k) S.dir = -S.dir; else { S.sort = k; S.dir = SORT_DIR[k]; } apply(); const again = $(`#wikiHead [data-sort="${k}"]`); if (again) again.focus(); return; }
    const set = t.closest('[data-set]');
    if (set) {
      e.preventDefault();
      S.q = ''; S.kinds.clear(); S.country = ''; S.maker = '';
      S[set.dataset.set] = set.dataset.value;
      if (sheetKind) closeSheet();
      apply();
      $('#explore').scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      return;
    }
    const vl = t.closest('[data-view-link]');
    if (vl) { setView(vl.dataset.viewLink); return; }
    if (t.id === 'compareClear') { S.cmp = []; syncCmpButtons(); renderTray(); writeUrl(); }
  });

  /* ── 관계 그래프 ──────────────────────────────────── */
  const HUB_STYLE = { maker: ['#406E8E', '제조사·기관'], country: ['#23395B', '국가'], kind: ['#23395B', '유형'] };
  const MODEL_COLOR = '#8EA8C3';
  let view = null, graphKey = '', moved = false;
  function buildGraph(list) {
    const nodes = [], edges = [], hubs = new Map(), seen = new Set();
    const hub = (type, name) => { const id = type + ':' + name; if (!hubs.has(id)) { const n = { id, type, label: name, members: [], links: 0 }; hubs.set(id, n); nodes.push(n); } return hubs.get(id); };
    const link = (a, b) => { const k = a.id + '>' + b.id; if (seen.has(k)) return; seen.add(k); edges.push([a, b]); a.links++; b.links++; };
    list.forEach((h) => {
      const m = { id: 'm:' + h.id, type: 'model', label: h.model, hand: h, links: 0 }; nodes.push(m);
      const join = (hb) => { link(m, hb); hb.members.push(h); };
      if (S.basis === 'maker' || S.basis === 'both') {
        const mk = hub('maker', h.makerGroup); join(mk);
        if (S.basis === 'both') h.countries.forEach((c) => { const ch = hub('country', c); link(mk, ch); if (!ch.members.includes(h)) ch.members.push(h); });
      } else if (S.basis === 'country') h.countries.forEach((c) => join(hub('country', c)));
      else join(hub('kind', h.kind));
    });
    return { nodes, edges, hubs: [...hubs.values()] };
  }
  function layout(g) {
    // 간단한 힘 기반 배치: 서로 밀어내고, 연결된 것끼리 당기고, 가운데로 모은다. 결과는 매번 같다.
    const { nodes, edges } = g, n = nodes.length;
    const hubIdx = new Map(); let hi = 0;
    nodes.forEach((nd) => { if (nd.type !== 'model') hubIdx.set(nd, hi++); });
    nodes.forEach((nd) => { if (nd.type !== 'model') { const a = hubIdx.get(nd) * 2.39996, r = 40 + 26 * Math.sqrt(hubIdx.get(nd)); nd.x = Math.cos(a) * r * 1.25; nd.y = Math.sin(a) * r * 0.9; } });
    let k = 0;
    edges.forEach(([a, b]) => { if (a.type === 'model' && a.x === undefined) { const an = (k++) * 2.39996; a.x = b.x + Math.cos(an) * 22; a.y = b.y + Math.sin(an) * 22; } });
    nodes.forEach((nd) => { if (nd.x === undefined) { nd.x = 0; nd.y = 0; } nd.r = nd.type === 'model' ? 4.5 : 6 + Math.sqrt(nd.members.length) * 2.6; });
    const ITER = 300;
    for (let it = 0; it < ITER; it++) {
      const alpha = 1 - it / ITER;
      nodes.forEach((nd) => { nd.dx = -nd.x * 0.006; nd.dy = -nd.y * 0.011; });
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
        const a = nodes[i], b = nodes[j]; let dx = a.x - b.x, dy = a.y - b.y; let d2 = dx * dx + dy * dy;
        if (d2 < 0.01) { dx = (i % 7) - 3 + 0.5; dy = (j % 5) - 2 + 0.5; d2 = dx * dx + dy * dy; }
        const f = ((a.type === 'model' ? 300 : 2400 + a.members.length * 260) + (b.type === 'model' ? 300 : 2400 + b.members.length * 260)) / d2, d = Math.sqrt(d2);
        dx = (dx / d) * f; dy = (dy / d) * f; a.dx += dx; a.dy += dy; b.dx -= dx; b.dy -= dy;
      }
      edges.forEach(([a, b]) => {
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1;
        const rest = a.type === 'model' ? 34 + b.r : 150, f = (d - rest) * 0.08;
        a.dx += (dx / d) * f; a.dy += (dy / d) * f; b.dx -= (dx / d) * f; b.dy -= (dy / d) * f;
      });
      const cap = 14 * alpha + 0.6;
      nodes.forEach((nd) => { const m = Math.sqrt(nd.dx * nd.dx + nd.dy * nd.dy) || 1, s = Math.min(m, cap) / m; nd.x += nd.dx * s; nd.y += nd.dy * s; });
    }
  }
  function renderGraph(list) {
    const key = S.basis + '|' + list.map((h) => h.id).join(',');
    if (key === graphKey) return;
    graphKey = key;
    const g = buildGraph(list);
    renderGraphList(g, list);
    const used = [...new Set(g.hubs.map((h) => h.type))];
    $('#graphLegend').innerHTML = `<span><i style="background:${MODEL_COLOR}"></i>모델</span>` + used.map((t) => `<span><i style="background:${HUB_STYLE[t][0]}"></i>${HUB_STYLE[t][1]}</span>`).join('') + '<span>점을 누르면 연결된 항목만 강조됩니다</span>';
    const svg = $('#graphSvg');
    if (getComputedStyle($('#graphCanvas')).display === 'none') { svg.innerHTML = ''; graphKey = ''; return; }   // 좁은 화면은 목록만
    layout(g);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    g.nodes.forEach((nd) => { x0 = Math.min(x0, nd.x); y0 = Math.min(y0, nd.y); x1 = Math.max(x1, nd.x); y1 = Math.max(y1, nd.y); });
    const pad = 56; view = { x: x0 - pad, y: y0 - pad, w: x1 - x0 + pad * 2, h: y1 - y0 + pad * 2 }; view.home = Object.assign({}, view);
    const many = g.hubs.length > 24;
    svg.innerHTML =
      g.edges.map(([a, b]) => `<line class="g-edge" data-a="${esc(a.id)}" data-b="${esc(b.id)}" x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"/>`).join('') +
      g.nodes.map((nd) => {
        const at = `transform="translate(${nd.x.toFixed(1)},${nd.y.toFixed(1)})" data-id="${esc(nd.id)}"`;
        if (nd.type === 'model') return `<a href="#/hand/${nd.hand.id}" tabindex="-1" class="g-node model" ${at} data-tip="${esc(nd.label + ' · ' + nd.hand.maker)}"><circle r="${nd.r}" fill="${MODEL_COLOR}"/><text x="8" y="4">${esc(nd.label)}</text></a>`;
        const showLabel = !many || nd.members.length >= 2;
        return `<g class="g-node hub" role="button" tabindex="0" ${at} aria-label="${esc(nd.label)}, 모델 ${nd.members.length}개" data-tip="${esc(nd.label + ' · 모델 ' + nd.members.length + '개')}"><circle r="${nd.r.toFixed(1)}" fill="${HUB_STYLE[nd.type][0]}"/><text x="0" y="${(nd.r + 15).toFixed(1)}"${showLabel ? '' : ' opacity="0"'}>${esc(nd.label)}</text></g>`;
      }).join('');
    setViewBox();
    svg.classList.remove('has-focus'); pinned = null; $('#graphTip').hidden = true;
  }
  function setViewBox() { if (view) $('#graphSvg').setAttribute('viewBox', `${view.x.toFixed(1)} ${view.y.toFixed(1)} ${view.w.toFixed(1)} ${view.h.toFixed(1)}`); }
  let pinned = null;
  function focusNode(id) {
    const svg = $('#graphSvg');
    $$('.on', svg).forEach((el) => el.classList.remove('on'));
    if (!id) { svg.classList.remove('has-focus'); $('#graphTip').hidden = true; return; }
    const ids = new Set([id]);
    $$('.g-edge', svg).forEach((l) => { if (l.dataset.a === id || l.dataset.b === id) { l.classList.add('on'); ids.add(l.dataset.a); ids.add(l.dataset.b); } });
    if (id.indexOf('country:') === 0 && S.basis === 'both') $$('.g-edge', svg).forEach((l) => { if (ids.has(l.dataset.b) && l.dataset.b !== id && l.dataset.b.indexOf('maker:') === 0) { l.classList.add('on'); ids.add(l.dataset.a); } });
    $$('.g-node', svg).forEach((n) => { if (ids.has(n.dataset.id)) n.classList.add('on'); });
    svg.classList.add('has-focus');
    const me = $$('.g-node', svg).find((n) => n.dataset.id === id), tip = $('#graphTip');
    if (me) { tip.textContent = me.dataset.tip; tip.hidden = false; }
  }
  function initGraphEvents() {
    const svg = $('#graphSvg');
    const nodeOf = (e) => e.target.closest && e.target.closest('.g-node');
    svg.addEventListener('pointerover', (e) => { const n = nodeOf(e); if (n && !drag) focusNode(n.dataset.id); });
    svg.addEventListener('pointerout', (e) => { if (nodeOf(e) && !drag) focusNode(pinned); });
    svg.addEventListener('focusin', (e) => { const n = nodeOf(e); if (n) focusNode(n.dataset.id); });
    svg.addEventListener('focusout', () => focusNode(pinned));
    function pick(n) {
      if (!n.classList.contains('hub')) return;
      pinned = pinned === n.dataset.id ? null : n.dataset.id; focusNode(pinned);
      const d = pinned && $$('#graphList details').find((x) => x.dataset.hub === pinned);
      if (d) { d.open = true; const box = $('#graphList'); box.scrollTo({ top: d.offsetTop - box.offsetTop, behavior: reduceMotion.matches ? 'auto' : 'smooth' }); }
    }
    svg.addEventListener('click', (e) => { if (moved) { e.preventDefault(); return; } const n = nodeOf(e); if (n) pick(n); else { pinned = null; focusNode(null); } });
    svg.addEventListener('keydown', (e) => { const n = nodeOf(e); if (n && n.classList.contains('hub') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pick(n); } });
    // 끌어서 이동, 버튼(또는 Ctrl+휠)으로 확대
    let drag = null;
    svg.addEventListener('pointerdown', (e) => { if (e.button !== 0 || !view) return; drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y }; moved = false; });
    window.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 5) return;
      moved = true; svg.classList.add('dragging');
      const r = svg.getBoundingClientRect(), s = Math.max(view.w / r.width, view.h / r.height);
      view.x = drag.vx - dx * s; view.y = drag.vy - dy * s; setViewBox();
    });
    window.addEventListener('pointerup', () => { if (drag) { drag = null; svg.classList.remove('dragging'); setTimeout(() => { moved = false; }, 0); } });
    function zoom(f) { if (!view) return; const cx = view.x + view.w / 2, cy = view.y + view.h / 2; view.w = Math.min(Math.max(view.w * f, view.home.w / 6), view.home.w * 1.6); view.h = view.w * (view.home.h / view.home.w); view.x = cx - view.w / 2; view.y = cy - view.h / 2; setViewBox(); }
    $('#zoomIn').addEventListener('click', () => zoom(0.75));
    $('#zoomOut').addEventListener('click', () => zoom(1 / 0.75));
    $('#zoomReset').addEventListener('click', () => { if (view) { Object.assign(view, view.home); setViewBox(); } });
    svg.addEventListener('wheel', (e) => { if (e.ctrlKey || e.metaKey) { e.preventDefault(); zoom(e.deltaY > 0 ? 1.12 : 0.89); } }, { passive: false });
    window.addEventListener('resize', () => { if (S.view === 'graph' && !$('#graphSvg').innerHTML) { graphKey = ''; renderGraph(current); } });
  }
  function renderGraphList(g, list) {
    // 그래프와 같은 연결을 글로 읽을 수 있는 목록. 좁은 화면에서는 이 목록이 그래프를 대신한다.
    const groupType = S.basis === 'maker' ? 'maker' : S.basis === 'kind' ? 'kind' : 'country';
    const groups = g.hubs.filter((h) => h.type === groupType).sort((a, b) => b.members.length - a.members.length || a.label.localeCompare(b.label, 'ko'));
    $('#graphList').innerHTML = groups.map((hb, i) => {
      const sub = groupType === 'maker' ? [...new Set(hb.members.flatMap((h) => h.countries))].join(' · ') : groupType === 'country' ? `제조사·기관 ${new Set(hb.members.map((h) => h.makerGroup)).size}곳` : '';
      const items = hb.members.slice().sort((a, b) => a.makerGroup.localeCompare(b.makerGroup, 'ko') || a.model.localeCompare(b.model, 'ko'))
        .map((h) => `<li><a href="#/hand/${h.id}">${esc(h.model)}${groupType === 'maker' ? '' : `<span>${esc(h.makerGroup)}</span>`}</a></li>`).join('');
      const pick = groupType === 'kind' ? '' : `<button type="button" class="link-btn pick" data-set="${groupType}" data-value="${esc(hb.label)}">이 ${groupType === 'maker' ? '제조사' : '국가'}만 보기</button>`;
      return `<details data-hub="${esc(hb.id)}"${i === 0 && groups.length < 6 ? ' open' : ''}><summary><span>${esc(hb.label)}${sub ? `<span class="sub">${esc(sub)}</span>` : ''}</span><span class="cnt">${hb.members.length}</span></summary><ul>${items}</ul>${pick}</details>`;
    }).join('');
  }

  /* ── 모션: 스크롤하면 나타나기, 숫자 올라가기 ─────── */
  // 움직임 줄이기 설정이거나 IntersectionObserver가 없으면 처음부터 보이게 둔다.
  const canAnimate = 'IntersectionObserver' in window && !reduceMotion.matches;
  let revealObs = null;
  if (canAnimate) {
    document.documentElement.classList.add('motion');
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        revealObs.unobserve(en.target);
        if (en.target.matches('[data-count]')) countUp(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }
  function revealIn(root) {
    const els = $$('[data-reveal], .g-card, [data-count]', root);
    if (!revealObs) { els.forEach((el) => el.classList.add('in')); return; }
    els.forEach((el) => { if (!el.classList.contains('in')) revealObs.observe(el); });
  }
  function countUp(el) {
    const end = +el.dataset.count, t0 = performance.now(), dur = 900;
    const step = (t) => { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  /* ── 시작 ─────────────────────────────────────────── */
  readUrl();
  renderHero();
  initToolbar();
  initGraphEvents();
  $('#q').value = S.q;
  apply();
  initScrollTone();
  revealIn(document);
  route();
})();
