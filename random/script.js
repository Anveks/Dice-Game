'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//basically if we choose several elements with querySelector and log them into console - they will be displayed as a pseudo-ARRAY; so we can manipulate them using the array functions. Like FOR LOOP:

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked!');
//     modal.classList.remove('hidden'); //we dont need the . before the class name cause its not querySelector!
//     overlay.classList.remove('hidden');
//   });

//KEYS ❗

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed!');
  console.log(e.key); //when we stated an 'e' (short from ELEMENT) as a parameter of the function - we can also see now that buttons were pressed.
  // We typed KEY word so we can see just which key was pressed.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
