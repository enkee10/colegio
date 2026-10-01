# Colegio MINKA

Sitio estático con identidad propia, inspirado en las secciones de [Colegio Pitágoras](https://pitagoras.edu.pe/colegio/). Incluye la portada y las nueve páginas de su menú principal, con textos adaptados para MINKA.

## Cómo verlo

Abre la carpeta con un servidor local. Por ejemplo, desde esta carpeta:

```powershell
py -m http.server 8080 --bind 127.0.0.1
```

Luego abre [http://127.0.0.1:8080](http://127.0.0.1:8080).

El servidor solo sirve los archivos; no es parte de las tecnologías del sitio. Los módulos ES requieren HTTP: al abrir los HTML directamente mediante `file://`, el navegador puede bloquear JavaScript. También puedes usar el servidor local de tu editor.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Portada, carrusel, propuesta, niveles y noticias |
| `quienes-somos.html` | Identidad, misión, visión y valores |
| `propuesta-educativa.html` | Metodología, primaria, secundaria y experiencias |
| `programa-socioemocional.html` | Tutoría, orientación y participación familiar |
| `sedes.html` | Tres sedes propuestas |
| `comunidad-educativa.html` | Docentes, familias, egresados y agenda |
| `admision.html` | Proceso, documentos y preguntas frecuentes |
| `minka-al-dia.html` | Seis noticias, búsqueda, categorías y lectura ampliada |
| `contacto.html` | Canales de atención y formulario de demostración |
| `trabaja-con-nosotros.html` | Vacantes filtrables y formulario de postulación |

Se incluyen seis páginas `noticia-*.html` para leer las historias también sin JavaScript, una `guia-admision.html` imprimible, `privacidad.html` y `creditos.html`.

## Organización y edición

- **HTML:** contenido estático y comentarios por bloques. Las páginas no dependen de JavaScript para mostrar su contenido principal.
- **CSS:** `assets/css/styles.css`, organizado por bloques. La paleta se modifica en las variables de `:root`. `no-script.css` ofrece navegación móvil cuando JavaScript está desactivado.
- **JavaScript:** módulos ES en `assets/js/`, con comentarios por bloques. `main.js` inicializa navegación, componentes, formularios, noticias y vacantes; `data.js` contiene el texto de las noticias ampliadas.
- **Logo:** `assets/images/escudo-minka.svg`, vector editable inspirado en el emblema proporcionado, con nombre, colores y símbolos propios.
- **Imágenes:** copias locales de fotografías del sitio de referencia. Sus enlaces originales están en `creditos.html` y `docs/imagenes-fuentes.json`. Algunas conservan la identidad del colegio fotografiado.

No hay frameworks, librerías externas, paquetes npm, fuentes remotas ni pasos de compilación.

Si editas una noticia, actualiza su tarjeta en `minka-al-dia.html`, sus párrafos en `assets/js/data.js` y la página `noticia-*.html` correspondiente. Las tres noticias de portada también están en `index.html`.

## Funciones y alcance

- Menú móvil accesible y cierre mediante Escape, clic exterior o cambio de tamaño.
- Carrusel manual de tres fotografías, sin rotación automática.
- Pestañas de niveles con navegación mediante flechas, Inicio y Fin.
- Búsqueda de noticias que ignora tildes y combina el texto con la categoría.
- Lectura ampliada mediante `dialog`, con enlaces de respaldo a los artículos HTML.
- Filtros de vacantes y preselección de sede, motivo o puesto desde enlaces internos.
- Validación nativa de campos, correo y consentimiento; comprobación de extensión PDF y límite de 5 MB para el CV.
- Guía preparada para imprimir o guardar como PDF desde el navegador.

Los formularios **no envían ni guardan datos**, y las postulaciones no cargan archivos. Los botones indican que validan una demostración. Las direcciones, teléfonos, correos, actividades, testimonios y vacantes son ficticios. El correo usa el dominio reservado `.example`.

El sitio está listo para revisar el diseño y navegar. Los canales reales y cualquier servicio de envío deberán incorporarse cuando se cuente con esa información.

## Revisión realizada

Las 19 páginas se revisaron en Chrome a cinco anchos de pantalla, entre 320 y 1440 píxeles. Se comprobaron enlaces, navegación, pestañas, carrusel, filtros, diálogos, formularios y guía de impresión, sin errores en la consola. El detalle está en `docs/VALIDACION.md` y `docs/validacion.json`.

Puedes consultar las capturas en `docs/vista-escritorio.png` y `docs/vista-celular.png`.
