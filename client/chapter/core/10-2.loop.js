/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
// console.log(i);
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = 3;

// do {
//   console.log(repeat);

//   repeat--;
// } while (repeat > 0);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;

// do {
//   console.log(count + 1);
//   count++;
// } while (count < 3);

let first = document.querySelector('.first');

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

// console.log(first);

const next = (node) => {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
};

const second = next(first);

console.log(second);

// prev(second)
const prev = (node) => {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
};

const firstNode = prev(second);

console.log(firstNode);