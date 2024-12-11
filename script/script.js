let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    index += step;
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }
    document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => moveSlide(1), 3000);  // Auto slide every 3 seconds
