let currentIndex = 0;
let images = document.querySelectorAll('.gallery img');

function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    images = document.querySelectorAll('.gallery img');
    currentIndex = Array.from(images).indexOf(imgElement);
    lightboxImg.src = imgElement.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
    images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        if (category === 'all' || img.getAttribute('data-category') === category) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}
