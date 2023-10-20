'use strict';

const cube = document.querySelector(".cube");

const DOT_MATRIX = {
  1: [[40, 40]],
  2: [[10, 10], [70, 70]],
  3: [[10, 10], [40, 40], [70, 70]],
  4: [[10, 10], [10, 70], [70, 10], [70, 70]],
  5: [[10, 10], [10, 70], [40, 40] ,[70, 10], [70, 70]],
  6: [[10, 10], [40, 10] , [70, 10], [70, 70], [40, 70] , [10, 70]]
};

document.querySelector(".roll-btn").addEventListener('click', () => {

  rollDice();

  cube.classList.add("animation-right");
  for (let i = 0; i < 5; i++) { // Initialize i, set the condition, and increment i
    setTimeout(() => {
      toggleAnimation();
      i === 4 && cube.classList.remove("animation-left");
    }, i * 100); // Delay the toggling of the animation for a smooth effect
  }

});

const toggleAnimation = () => {
  cube.classList.toggle("animation-left");
  cube.classList.toggle("animation-right");
};

const rollDice = () => {
  cube.innerHTML = "";
  const randomDice = Math.floor(Math.random() * 6) + 1;

  let dots = DOT_MATRIX[randomDice];

  dots.forEach((d) => {
    const dot = document.createElement('div');
    dot.className = 'dice-dot';
    dot.style.top = d[0] + '%';
    dot.style.right = d[1] + '%';
    cube.appendChild(dot);
  });
};


