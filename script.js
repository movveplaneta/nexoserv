// Selecciona el formulario y el mensaje de éxito
const form = document.querySelector('form[name="solicitud-servicio"]');
const mensajeExito = document.getElementById('mensajeExito');

// Escucha el envío del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío real para testear

    // Muestra el mensaje de éxito
    mensajeExito.classList.add('activo');

    // Opcional: reinicia el formulario después de un tiempo
    setTimeout(() => {
        form.reset();
        mensajeExito.classList.remove('activo');
    }, 3000);