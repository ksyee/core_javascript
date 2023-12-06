/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (...parm) {
  let result = 0;

  let arr = [...arguments];

  // parm.forEach((price) => {
  //   result += price;
  // });

  // Array.prototype.forEach.call(arguments, (item) => {
  //   result += item;
  // });

  result = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  /* for of */
  //   for (let value of arguments) {
  //     result += value;
  //   }

  return result;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  // let isActive = false;
  // let success = function(){
  //   console.log('성공!')
  //  }
  // let fail = function(){
  //   console.log('error')
  //  }

  if (isActive) success();
  else fail();
  // isActive ? success() : fail()
};

cb(
  false,
  function () {
    console.log('성공!');
  },
  function () {
    console.log('실패!');
  }
);

function movePage(url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail('에러임');
  }
}

movePage(
  'https://www.naver.com',
  (url) => {
    console.log(url);
  },
  (err) => {
    console.log(err);
  }
);

function func1(obj) {
  let name = 'tiger';
  let age = 35;

  return {
    name: name,
    age: age,
  };
}

func1({
  age: 36,
  name: 'tiger',
});

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// 📂
// import css from 'css.js' // module

// var는 블록 스코프 : x
// var는 함수 스코프 : o

// incapsulation (캡슐화)
// 모듈화

// const MASTER = (function (g){

//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';

//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);

// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')

const css = (function () {
  function getStyle(node, prop) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );

    return getComputedStyle(node, null)[prop];
  }

  function setStyle(node, prop, value) {
    if (typeof node === 'string') node = document.querySelector(node);
    if (typeof prop !== 'string')
      throw new Error(
        'setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.'
      );
    if (!value)
      throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

    node.style[prop] = value;
  }

  function css(node, prop, value) {
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node, prop) : setStyle(node, prop, value);
  }

  return css;
})();
