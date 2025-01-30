let currentIndex = 0;
let startX = 0;
let isDragging = false;
const contador = document.querySelector('.contador');
const images = document.querySelectorAll('.carrossel-container img');
const totalImages = images.length;
const container = document.querySelector('.carrossel-container');

// Atualiza o contador
function atualizarContador() {
    contador.textContent = `${currentIndex + 1} / ${totalImages}`;
}

// Move o carrossel
function moverCarrossel(direction) {
    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0; // Volta para a primeira imagem
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Vai para a última imagem
    }

    const offset = -currentIndex * 1080; // Calcula o deslocamento com base no índice atual
    container.style.transform = `translateX(${offset}px)`; // Move o container

    atualizarContador(); // Atualiza o contador
}

// Eventos de arrastar (touch e mouse)
container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) { // Sensibilidade do arrasto
        if (diff > 0) {
            moverCarrossel(1); // Arrastou para a esquerda (próxima imagem)
        } else {
            moverCarrossel(-1); // Arrastou para a direita (imagem anterior)
        }
        isDragging = false;
    }
});

container.addEventListener('touchend', () => {
    isDragging = false;
});

// Eventos de clique nas setas
document.querySelector('.anterior').addEventListener('click', () => moverCarrossel(-1));
document.querySelector('.proximo').addEventListener('click', () => moverCarrossel(1));

// Inicializa o contador
atualizarContador();
