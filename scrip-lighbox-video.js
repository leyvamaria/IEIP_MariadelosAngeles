const lightbox = document.getElementById('videoLightbox');
const video = document.getElementById('lightboxVideo');

function openLightbox() {
  lightbox.style.display = 'flex';
  video.play();
}

function closeLightbox() {
  lightbox.style.display = 'none';
  video.pause();
  video.currentTime = 0; // Reinicia el video al cerrar
}

// Cerrar al hacer clic fuera del contenido del video
window.onclick = function(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
}
U