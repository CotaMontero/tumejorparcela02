document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    const prevButton = document.querySelector(".modal-arrow.prev");
    const nextButton = document.querySelector(".modal-arrow.next");

    let currentGalleryItems = []; // Array para almacenar las imágenes de la galería actual
    let currentImageIndex = 0; // Índice de la imagen actual en el modal

    function openModal(imageSrc, galleryItems, index) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        currentGalleryItems = galleryItems;
        currentImageIndex = index;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    prevButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
        modalImg.src = currentGalleryItems[currentImageIndex].src;
    });

    nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % currentGalleryItems.length;
        modalImg.src = currentGalleryItems[currentImageIndex].src;
    });

    const allGalleries = document.querySelectorAll(".gallery-container");

    allGalleries.forEach(gallery => {
        const galleryItems = gallery.querySelectorAll(".gallery-item img");

        galleryItems.forEach((image, index) => {
            image.addEventListener("click", () => {
                openModal(image.src, galleryItems, index);
            });
        });
    });
});