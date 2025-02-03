document.addEventListener('DOMContentLoaded', function () {
    const carrosseis = document.querySelectorAll('.carrossel'); // Seleciona todos os carrosséis

    carrosseis.forEach(carrossel => {
        // Seleciona o contêiner do carrossel (pai do carrossel)
        const container = carrossel.parentElement;

        // Seleciona as setas dentro do contêiner
        const arrowLeft = container.querySelector('.carrossel-arrow--left');
        const arrowRight = container.querySelector('.carrossel-arrow--right');

        // Calcula a largura do card + gap (24px)
        const cardWidth = carrossel.querySelector('.card-post').offsetWidth + 24;

        // Adiciona os event listeners apenas se as setas existirem
        if (arrowLeft && arrowRight) {
            arrowLeft.addEventListener('click', () => {
                carrossel.scrollBy({
                    left: -cardWidth,
                    behavior: 'smooth'
                });
            });

            arrowRight.addEventListener('click', () => {
                carrossel.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            });
        } else {
            console.error('Setas de navegação não encontradas para o carrossel:', carrossel);
        }
    });
});