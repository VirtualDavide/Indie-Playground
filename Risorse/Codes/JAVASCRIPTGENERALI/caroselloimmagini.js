let slideIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel img');
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    carousel.style.transform = `translateX(${-slideIndex * 100}%)`;
}