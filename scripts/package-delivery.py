import pathlib,subprocess,zipfile
R=pathlib.Path(__file__).resolve().parents[1]
out=R/'output';out.mkdir(exist_ok=True)
files=[x for x in subprocess.check_output(['git','ls-files','-z'],cwd=R).decode('utf-8').split('\0') if x and (R/x).is_file()]
with zipfile.ZipFile(out/'HANDS-LAB-complete.zip','w',zipfile.ZIP_DEFLATED) as z:
 for name in files:z.write(R/name,'HANDS-LAB/'+name)
with zipfile.ZipFile(out/'HANDS-LAB-Obsidian.zip','w',zipfile.ZIP_DEFLATED) as z:
 for p in (R/'obsidian/HANDS-LAB').rglob('*'):
  if p.is_file():z.write(p,'HANDS-LAB/'+p.relative_to(R/'obsidian/HANDS-LAB').as_posix())
for p in out.glob('*.zip'):
 with zipfile.ZipFile(p) as z:assert z.testzip() is None
 print(p.name,p.stat().st_size,'bytes')
