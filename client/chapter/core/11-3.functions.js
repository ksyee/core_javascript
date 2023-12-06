/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  let total = 0;
  total = args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return total;
};

// console.log(calcAllMoney(1000, 5000, 4500, 15000));

// 화살표 함수와 this
// 일반 함수
// - constructor 내장
// - this: 나를 호출한 대상을 this로 찾음.

// 화살표 함수
// - constructor 내장X
// - this: 자체를 바인딩하지 않음.

const user = {
  name: '김똘복',
  age: 13,
  address: '서울시 어디어디',
  grades: [80, 90, 100],
  totalGrades: () => {},
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

console.log(powExpression(2, 53));

// console.log(pow(2, 53));

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }

  return result;
};

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => (acc += text), '');

console.log(repeatExpression('1234', 4));
