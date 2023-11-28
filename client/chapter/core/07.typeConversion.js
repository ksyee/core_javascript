/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));
// undefined, null
let days = null;
let weekend;
console.log(days + '');
console.log(weekend + '');
// boolean
let isChecked = false;
console.log(isChecked + '');
/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));
// null
let money = null;
console.log(Number(money));
// boolean
let cutie = true;
console.log(Number(cutie));
// string
let num = '250';
console.log(Number(num));
// numeric string
const width = '100.1234px';
console.log(parseInt(width, 10));
console.log(parseFloat(width, 10));
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
