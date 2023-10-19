const cube = document.querySelector(".cube");
let activePlayer = 'player1';
let p1_score = 0;
let p2_score = 0;

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

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

const DOT_MATRIX = {
  1: [[40, 40]],
  2: [[10, 10], [70, 70]],
  3: [[10, 10], [40, 40], [70, 70]],
  4: [[10, 10], [10, 70], [70, 10], [70, 70]],
  5: [[10, 10], [10, 70], [40, 40] ,[70, 10], [70, 70]],
  6: [[10, 10], [40, 10] , [70, 10], [70, 70], [40, 70] , [10, 70]]
};

const rollDice = () => {
  cube.innerHTML = "";
  const randomDice = Math.floor(Math.random() * 6) + 1;

  let dots;
  if (randomDice > 1) {
    dots = DOT_MATRIX[randomDice];
    if (activePlayer === 'p1') {
      p1_score += randomDice;
      player1.querySelector(".dice-score").innerHTML = p1_score;
    } else {
      p2_score += randomDice;
      player2.querySelector(".dice-score").innerHTML = p2_score;
    }
  } else {
    activePlayer

    dots = DOT_MATRIX[randomDice];
    activePlayer = 'player2';
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.player-2').classList.toggle('active');
  }

  dots.forEach((d) => {
    const dot = document.createElement('div');
    dot.className = 'dice-dot';
    dot.style.top = d[0] + '%';
    dot.style.right = d[1] + '%';
    cube.appendChild(dot);
  });
};

// document.querySelector(".settings-btn").addEventListener('click', () => {
//   document.querySelector(".cont-modal").classList.toggle('hidden');
//   document.querySelector(".overlay").classList.toggle('hidden');
// });

// document.querySelector('.btn-close').addEventListener('click', () => {
//   document.querySelector(".cont-modal").classList.toggle('hidden');
//   document.querySelector(".overlay").classList.toggle('hidden');
// });

