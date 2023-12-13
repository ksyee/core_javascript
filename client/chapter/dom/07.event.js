/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

const handleClick = () => {
  console.log('clicked');
};

// first.onclick = handleClick;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// first.addEventListener('mouseover', handleClick);

// - removeEventListener

// bindEvent('.first', 'click', handleClick);

// call
// apply
// bind

// const remove = bindEvent('.first', 'click', handleClick);
const debounce = (callback, limit = 100) => {
  let timeout;
  clearTimeout(timeout);

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}; // 일정 시간이 지나기 전에는 콜백을 호출하지 않음

const throttle = (callback, limit = 100) => {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}; // 일정 시간이 지나기 전에는 콜백을 한 번만 호출

const ground = getNode('.ground');
const ball = getNode('#ball');

ground.addEventListener(
  'mousemove',
  throttle(() => {
    console.log(this);
  }, 1000)
);

// const handleClickBall = ({ offsetX: x, offsetY: y }) => {
//   console.log(x, y);
//   ball.style.transform = `translate(${x}px,${y}px)`;
// };

// ground.addEventListener('click', handleClickBall);

// function func(a, b) {
//   console.log('this: ', this);
//   console.log('A: ', a);
//   console.log('B: ', b);
// }

// func.call('tiger', 1, 2);
