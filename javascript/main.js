// nuevo-archivo.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const brandLinks = document.querySelector('.brand-links');

    menuToggle.addEventListener('click', function () {
        brandLinks.classList.toggle('show');
    });

    // Cerrar el menú al hacer clic en un enlace
    brandLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            brandLinks.classList.remove('show');
        });
    });
});
