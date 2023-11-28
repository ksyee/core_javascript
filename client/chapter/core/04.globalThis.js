var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable);
