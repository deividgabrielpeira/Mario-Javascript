const mario = document.querySelector('.mario');
const pipes = document.querySelector('.pipes')

const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {
      mario.classList.remove('jump')
   }, 500);
}

const loop = setInterval(() => {
   const pipePosition = pipes.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

      pipes.style.animation = 'none';
      pipes.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.left = `${marioPosition}px`;

      mario.src = 'img/mario/game-over.png';
      mario.style.width = '75px'
      mario.style.marginLeft = '50px'

      clearInterval(loop);
   }
}, 10);

document.addEventListener('keydown', jump);