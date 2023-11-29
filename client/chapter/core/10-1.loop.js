/* --------------- */
/* While Loop      */
/* --------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */
const frontEndDevLength = frontEndDev.length;

// while 문 (순환 : 순방향)

let i = 0;

while (i < frontEndDevLength) {
  console.log(frontEndDev[i]);
  i++;
}

// while 문 (역순환 : 역방향)

let j = frontEndDevLength - 1;

while (j >= 0) {
  console.log(frontEndDev[j]);
  j--;
}

// 성능 진단 : 순환 vs. 역순환