/* BLOQUE 01 · Prefill de sede y puesto a partir de enlaces internos. */
export function initForms() {
  const parameters = new URLSearchParams(window.location.search);
  for (const key of ['sede', 'puesto', 'motivo']) {
    const select = document.querySelector(`[data-prefill="${key}"]`);
    if (select && [...select.options].some(option => option.value === parameters.get(key))) {
      select.value = parameters.get(key);
    }
  }

  /* BLOQUE 02 · Validación de demostración: nunca se hace una petición de envío.
     Los botones se habilitan solo después de instalar este manejador. */
  document.querySelectorAll('[data-demo-form]').forEach(form => {
    const submit = form.querySelector('[data-demo-submit]');
    const status = form.querySelector('[data-form-status]');
    const file = form.querySelector('input[type="file"]');

    /* BLOQUE 03 · Comprobación del formato y tamaño del CV, sin cargarlo. */
    if (file) {
      file.addEventListener('change', () => {
        const selected = file.files[0];
        let error = '';
        if (selected && !/\.pdf$/i.test(selected.name)) error = 'Selecciona un archivo PDF.';
        if (selected && selected.size > 5 * 1024 * 1024) error = 'El PDF debe pesar como máximo 5 MB.';
        file.setCustomValidity(error);
        if (error) file.reportValidity();
      });
    }

    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      status.textContent = 'Validación completada. Este formulario es una demostración: tus datos no se han enviado ni guardado.';
      status.hidden = false;
      status.focus();
    });
    form.addEventListener('input', () => { status.hidden = true; });
    if (submit) submit.disabled = false;
  });
}
