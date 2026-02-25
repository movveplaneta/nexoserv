// Seleccionamos todos los botones con clase .abrir-formulario
const botonesAbrir = document.querySelectorAll('.abrir-formulario');

// Seleccionamos el modal y el botón de cerrar
const modal = document.getElementById('modalFormulario');
const cerrarModal = modal.querySelector('.cerrar-modal');

// Función para abrir el modal
botonesAbrir.forEach(boton => {
    boton.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostramos el modal
    });
});

// Función para cerrar el modal al hacer click en la X
cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal si se hace click fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

