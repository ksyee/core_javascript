/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = getNode('nav');

const handleClick = (e) => {
  let target = e.target;
  let li = target.closest('li');

  if (!li) return;

  // if (li.className === 'home') {
  //   li.style.backgroundColor = 'orange';
  // }

  if (li.dataset.name === 'about') {
    li.style.backgroundColor = 'yellow';
  }
  if (li.dataset.name === 'home') {
    li.style.backgroundColor = 'lightgreen';
    li.style.color = 'white';
  }
  if (li.dataset.name === 'contact') {
    li.style.backgroundColor = 'dodgerblue';
    li.style.color = 'white';
  }
};

nav.addEventListener('click', handleClick);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
