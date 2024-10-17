function toggleImage(img) {
    img.classList.toggle('fullscreen'); // Alterna la clase 'fullscreen'
}

// Agrega el evento de cerrar con Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const fullscreenImage = document.querySelector('.service-icon.fullscreen');
        if (fullscreenImage) {
            toggleImage(fullscreenImage);
        }
    }
});
