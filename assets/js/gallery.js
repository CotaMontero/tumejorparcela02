document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        gallery.classList.add('active');
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.classList.remove('active');
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // * 2 para hacer el scroll más rápido
        gallery.scrollLeft = scrollLeft - walk;
    });

    // Touch events (mantener estos también)
    gallery.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.classList.add('active');
    });

    gallery.addEventListener('touchend', () => {
        gallery.classList.remove('active');
    });

    gallery.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX);
        gallery.scrollLeft = scrollLeft - walk;
    });
}); 