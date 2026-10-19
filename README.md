# Decoevento · Cotizador

Página web para cotizar servicios de catering y eventos de Decoevento.
El cliente cuenta su evento, elige platos del menú y envía la cotización por WhatsApp o correo.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página (estructura y textos fijos) |
| `data.js` | **El menú: platos, descripciones y precios en español e inglés.** Aquí se cambian los precios. |
| `app.js` | Lógica: pasos, selección, cálculo del total, textos ES/EN, envío por WhatsApp/correo |
| `styles.css` | Diseño |
| `logo.png`, `icon.png` | Logo y favicon |
| `build-artifact.py` | Genera `artifact.html`, la versión publicada como Artifact de Claude |

## Contacto configurado

- WhatsApp / teléfono: +1 (786) 740-7339
- Correo: decoeventolg@yahoo.com
- Instagram: @decoeventolg

## Publicar

Es un sitio estático: sirve tal cual en GitHub Pages, Netlify o cualquier hosting.
Para probar en local: `python3 -m http.server` y abrir http://localhost:8000.
