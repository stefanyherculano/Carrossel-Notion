let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    
    index += step;
    
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    document.querySelector(".carousel").style.transform = `translateX(${-index * 100}%)`;
}
