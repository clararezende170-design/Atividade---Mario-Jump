const player = document.querySelector('.player');
const heart = document.querySelector('.heart');

// PULO
const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 550);
};

// LOOP DO JOGO
const loop = setInterval(() => {

    const heartPosition = heart.offsetLeft;
    const playerPosition = +window.getComputedStyle(player)
        .bottom.replace('px', '');

    if (heartPosition <= 100 && heartPosition > 0 && playerPosition < 70) {

        // parar coração
        heart.style.animation = 'none';
        heart.style.left = `${heartPosition}px`;

        // parar personagem
        player.classList.remove('jump');
        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        // personagem parada (game over)
        player.src = "./img/Design sem nome (1).gif";

        clearInterval(loop);
    }

}, 10);

// tecla pra pular
document.addEventListener('keydown', jump);