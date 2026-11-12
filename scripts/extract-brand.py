"""Extract the supplied PDF-compatible Illustrator logo without redrawing it.
Requires PyMuPDF. The original Illustrator artwork remains unchanged.
"""
import pathlib,pymupdf
R=pathlib.Path(__file__).resolve().parents[1]
d=pymupdf.open(R/'assets/brand/HANDSLab-original.ai')
p=d[0]
p.set_cropbox(pymupdf.Rect(106,72,580,168))
(R/'assets/brand/handslab-logo.svg').write_text(p.get_svg_image(),encoding='utf-8')
p.get_pixmap(matrix=pymupdf.Matrix(3,3),alpha=True).save(R/'assets/brand/handslab-logo.png')
p.set_cropbox(pymupdf.Rect(106,72,201,168))
p.get_pixmap(matrix=pymupdf.Matrix(3,3),alpha=True).save(R/'assets/brand/handslab-symbol.png')
