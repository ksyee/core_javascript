const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('.nav');

list.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    let currentDepth = e.target.lastElementChild;
    depth.forEach((item) => {
      item.style.height = 0;
    });
    currentDepth.style.height = '100px';
  });
});

nav.addEventListener('mouseleave', () => {
  depth.forEach((item) => {
    item.style.height = 0;
  });
});
