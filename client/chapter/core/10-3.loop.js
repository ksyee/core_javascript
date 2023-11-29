/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let j = 2;

while (j <= 10) {
  console.log(j);
  j++;
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for (let k = 0; k < l; k++) {
  if (frontEndDev[k] === 'SVG' || frontEndDev[k] === 'jQuery') {
    continue;
  }
  console.log('for: ' + frontEndDev[k]);
}

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let k = l - 1; k >= 0; k--) {
  console.log('reverse: ' + frontEndDev[k]);
}
