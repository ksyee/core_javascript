// querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

// console.log( button );

// eventListener 이벤트 핸들러  => click : 객체  , scroll : 객체

function timer() {}

setTimeout(timer, 3000);

function handleMenu(e) {
  e.preventDefault();

  menu.classList.toggle('is--active');
}

button.addEventListener('click', handleMenu);

// Node.addEvent...

// classList

// preventDefault
