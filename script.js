// =============================
// MODAL FORMULARIO
// =============================
const modal = document.getElementById('modalFormulario');
const btnAbrir = document.querySelectorAll('.abrir-formulario');
const cerrarModal = document.querySelector('.cerrar-modal');

btnAbrir.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
    });
});

cerrarModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('show');
    }
});

// =============================
// FORMULARIO AJAX (SIN RECARGA)
// =============================
const form = document.getElementById('formularioSolicitud');
const mensajeExito = document.getElementById('mensajeExito');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes agregar fetch() si quieres enviar a un backend
    mensajeExito.style.display = 'block';
    setTimeout(() => {
        mensajeExito.style.display = 'none';
        modal.classList.remove('show');
        form.reset();
    }, 3000);
});

// =============================
// SMOOTH SCROLL PARA ANCLA
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =============================
// HAMBURGER MENÚ (MÓVIL)
// =============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// =============================
// PRELOAD LINKS PARA NAVEGACIÓN RÁPIDA
// =============================
const links = document.querySelectorAll('a[href$=".html"]');
links.forEach(link => {
    const url = link.getAttribute('href');
    if(url){
        const prefetch = document.createElement('link');
        prefetch.rel = 'prefetch';
        prefetch.href = url;
        document.head.appendChild(prefetch);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    const link = dropdown.querySelector("a");

    link.addEventListener("click", function(e) {
        if (window.innerWidth <= 992) { // Solo en móvil
            e.preventDefault();
            dropdown.classList.toggle("active");
        }
    });
});

document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    const pages = {
        "climatizacion": "climatizacion.html",
        "clima": "climatizacion.html",
        "electricidad": "electricidad.html",
        "electric": "electricidad.html",
        "plomeria": "plomeria.html",
        "plomería": "plomeria.html",
        "electrodomesticos": "electrodomesticos.html",
        "electrodomésticos": "electrodomesticos.html",
        "camaras": "camaras.html",
        "cámaras": "camaras.html",
        "proyectos": "proyectos.html",
        "blog": "blog.html",
        "contacto": "contacto.html",
        "nosotros": "acercade.html"
    };

    for (let key in pages) {
        if (query.includes(key)) {
            window.location.href = pages[key];
            return;
        }
    }

    alert("No se encontraron resultados en Nexoserv.");
});