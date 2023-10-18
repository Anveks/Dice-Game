const cube = document.querySelector(".cube")

document.querySelector(".btn").addEventListener('click', () => {
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
}