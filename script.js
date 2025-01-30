let currentIndex = 0;

function moverCarrossel(direction) {
    const container = document.querySelector('.carrossel-container');
    const images = document.querySelectorAll('.carrossel-container img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const offset = -currentIndex * 1080;
    container.style.transform = `translateX(${offset}px)`;
}
