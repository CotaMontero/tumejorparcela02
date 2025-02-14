document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Mostrar el slide actual
        slides[index].classList.add('active');
        
        // Actualizar dots
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event Listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Click en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto play
    // setInterval(nextSlide, 5000);

    // Mostrar el primer slide
    showSlide(currentSlide);
}); 