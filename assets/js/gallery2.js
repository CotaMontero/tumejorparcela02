document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector('.modal-arrow.prev');
    const nextButton = document.querySelector('.modal-arrow.next');
    const galleryItems = document.querySelectorAll(".gallery2-item img");
    let currentImageIndex = 0;

    galleryItems.forEach((img, index) => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            currentImageIndex = index;
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        modalImg.src = galleryItems[currentImageIndex].src;
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        modalImg.src = galleryItems[currentImageIndex].src;
    });
});
