let currentIndex = 0;

function moverCarrossel(direction) {
    const container = document.querySelector('.carrossel-container');
    const images = document.querySelectorAll('.carrossel-container img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0; // Volta para a primeira imagem
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Vai para a última imagem
    }

    const offset = -currentIndex * 1080; // Calcula o deslocamento com base no índice atual
    container.style.transform = `translateX(${offset}px)`; // Move o container
}
