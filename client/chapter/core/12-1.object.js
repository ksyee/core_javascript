/* --------- */
/* Object    */
/* --------- */

/* global isObject */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  'z-index': 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  'max-width': '800px',
  height: '40vh',
  'min-height': '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-aszxcmlqwe!@#123',
  name: 'tiger',
  email: 'kkddkk@gmail.com',
  isSignIn: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);
// console.log(authUser['name']);
// console.log(authUser['email']);
// console.log(authUser['isSignIn']);
// console.log((authUser['permission'] = 'paid'));

Object.prototype.SIGN = true;

for (let key in authUser) {
  console.log(key);
  console.log(authUser[key]);
}

// 객체의 key값만을 모아놓은 배열
let keyList = Object.keys(authUser);

// 객체의 value값만을 모아놓은 배열
let valueList = Object.values(authUser);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'name');

function deleteProperty(obj, key) {
  delete obj[key];
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10000, 100000];

const [a1, a2, a3, a4, a5] = arr;

console.log(a1);

for (let [key, value] of Object.entries(authUser)) {
  console.log(key);
  console.log(value);
}

const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
};

let sum = 0;

for (let salary of Object.values(salaries)) {
  sum += salary;
}

console.log(sum);

/* --------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments     */
/* --------------------------------------------- */
