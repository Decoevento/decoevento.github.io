"""Genera artifact.html (versión para publicar como Artifact de Claude) a partir de index.html.
El visor de Artifacts agrega su propio <html>/<head>/<body>, así que aquí se quitan."""
import re, pathlib
here = pathlib.Path(__file__).parent
src = (here / "index.html").read_text()
head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
body = re.search(r"<body>(.*?)</body>", src, re.S).group(1)
head = re.sub(r'\s*<meta (charset|name="viewport")[^>]*>', "", head)
(here / "artifact.html").write_text(head.strip() + "\n" + body.strip() + "\n")
print("artifact.html listo")
