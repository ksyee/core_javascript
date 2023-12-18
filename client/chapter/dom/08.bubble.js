/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  console.log('%c section', 'color: orange');
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color: lightgreen');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color: purple');
// });

/* 캡처링 ----------------------------------------------------------------- */
