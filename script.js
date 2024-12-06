document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
const background = document.querySelector('.background');

// Função para criar manchas dinamicamente
function createInkSpot() {
    const inkSpot = document.createElement('div');
    inkSpot.classList.add('ink-spot');

    // Posicionamento e tamanho aleatórios
    const size = Math.random() * 150 + 50; // Entre 50px e 200px
    inkSpot.style.width = `${size}px`;
    inkSpot.style.height = `${size}px`;
    inkSpot.style.top = `${Math.random() * 100}%`;
    inkSpot.style.left = `${Math.random() * 100}%`;
    inkSpot.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5s a 15s

    background.appendChild(inkSpot);

    // Remover a mancha após a animação
    setTimeout(() => {
        background.removeChild(inkSpot);
    }, 15000); // Ajuste conforme a duração da animação
}

// Gerar manchas continuamente
setInterval(createInkSpot, 1000); // Adiciona uma mancha a cada 2 segundos
