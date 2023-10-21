'use strict';

const cube = document.querySelector(".cube");
const overlay = document.querySelector('.overlay');

const p1 = document.querySelector(".player-1");
const p2 = document.querySelector(".player-2");

const roll_button = document.querySelector('.roll-btn');
const settings_button = document.querySelector('.settings-btn');
const restart_button = document.querySelector('.restart-btn');
const hold_button = document.querySelector('.hold-btn');
const close_button = document.querySelectorAll('.btn-close');

let gameOver = false;
let endGameMessage;
let current_score = 0;
let activePlayer = 1;

const DOT_MATRIX = {
  1: [[40, 40]],
  2: [[10, 10], [70, 70]],
  3: [[10, 10], [40, 40], [70, 70]],
  4: [[10, 10], [10, 70], [70, 10], [70, 70]],
  5: [[10, 10], [10, 70], [40, 40] ,[70, 10], [70, 70]],
  6: [[10, 10], [40, 10] , [70, 10], [70, 70], [40, 70] , [10, 70]]
};

roll_button.addEventListener('click', () => {
  rollDice();

  cube.classList.add("animation-right");
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      toggleAnimation();
      i === 4 && cube.classList.remove("animation-left");
    }, i * 100); // delay the toggling of the animation for a smooth effect
  }
});

const toggleAnimation = () => {
  cube.classList.toggle("animation-left");
  cube.classList.toggle("animation-right");
};

const rollDice = () => {
  cube.innerHTML = "";
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  let dots = DOT_MATRIX[randomDice];
  dots.forEach((d) => {
    const dot = document.createElement('div');
    dot.className = 'dice-dot';
    dot.style.top = d[0] + '%';
    dot.style.right = d[1] + '%';
    if (dots.length === 1) dot.style.background = 'crimson';
    cube.appendChild(dot);
  });

  if (randomDice > 1) {
    current_score += randomDice;

    document.querySelector(`.player-${activePlayer}`).querySelector('.score').innerHTML = current_score;
    
  } else {
    // Toggle the "active" class for both players
    p1.classList.toggle("active");
    p2.classList.toggle("active");

    const activePlayerElement = document.querySelector(`.player-${activePlayer}`);
    activePlayerElement.querySelector('.score').innerHTML = 0;
    current_score = 0;

    activePlayer === 1 
      ? activePlayer = 2 
      : activePlayer = 1;
  };
};

hold_button.addEventListener('click', () => {
  const activePlayerElement = document.querySelector(`.player-${activePlayer}`);

  // Update the current player's score
  const playerScoreElement = activePlayerElement.querySelector('.dice-score');
  const playerCurrentElement = activePlayerElement.querySelector('.score');

  playerScoreElement.innerHTML = Number(playerScoreElement.innerHTML) + current_score;
  playerCurrentElement.innerHTML = 0;
  current_score = 0;

  if (playerScoreElement.innerHTML >= 10) {
    const gameOverCont = document.querySelector(".cont-modal");
    gameOverCont.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    gameOverCont.firstElementChild.innerHTML = `Congratulations! Player #${activePlayer} has won! 🎉`;

    resetGame();
  }

  // Toggle the "active" class to indicate the change
  p1.classList.toggle("active");
  p2.classList.toggle("active");

  // Switch to the other player
  activePlayer === 1 
    ? activePlayer = 2 
    : activePlayer = 1;
});

const resetGame = () => {
  activePlayer = 1;
  p1.querySelector(".dice-score").innerHTML = 0;
  p2.querySelector(".dice-score").innerHTML = 0;
}

// close modal button
close_button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
})


