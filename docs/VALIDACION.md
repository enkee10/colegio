# Validación de la propuesta MINKA

Revisión realizada en Chrome sobre el servidor local del proyecto.

- 19 páginas HTML con enlaces internos existentes, anclas válidas e identificadores únicos.
- Contenido HTML sin estilos inline, manejadores de eventos inline ni scripts incrustados.
- Distribución revisada a 320, 390, 768, 1024 y 1440 píxeles, sin desbordamiento horizontal.
- Navegación móvil, Escape, pestañas por teclado y carrusel anterior/siguiente verificados.
- Noticias: categorías, búsqueda sin tildes, estado vacío, diálogo, Escape y enlaces desde portada verificados.
- Formularios: campos requeridos, selección de sede y motivo, teléfono con formato internacional y mensaje de demostración verificados.
- Vacantes: filtros, reinicio y preselección de puesto verificados. El CV rechaza extensión distinta de PDF y tamaño superior a 5 MB.
- Guía: botón de impresión y ocultación de controles en el modo de impresión verificados.
- Fotografías de portada cargadas correctamente desde recursos locales.
- Navegación móvil de respaldo disponible con JavaScript desactivado.
- Sin errores de JavaScript o de recursos en la consola de la revisión.

El resumen estructurado está en `validacion.json`. Las capturas están en `vista-escritorio.png` y `vista-celular.png`.

Los formularios siguen siendo una demostración sin envío ni almacenamiento. La revisión no incluye servicios de backend porque esta propuesta es estática.
