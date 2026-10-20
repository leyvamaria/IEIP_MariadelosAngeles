const imagenes = document.querySelectorAll('.imagen-galeria');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const cerrar = document.getElementById('cerrar');

// Abrir lightbox al hacer clic en una imagen
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        lightbox.classList.add('activo');
        lightboxImg.src = imagen.src;
    });
});

// Cerrar lightbox al hacer clic en la "X"
cerrar.addEventListener('click', () => {
    lightbox.classList.remove('activo');
});

// Cerrar lightbox haciendo clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('activo');
    }
});
