/* -------------------------------------------------------------------------- */
/*                              Logical Operators                             */
/* -------------------------------------------------------------------------- */

// let age = 50;

// if (age >= 14 && age <= 90) {
//   console.log('죽을 때 멀음');
// }

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 부정 연산자
let reverseValue = !a;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// 첫 번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let user = prompt('누구임');
let regex = /admin/i;

if (regex.test(user)) {
  let password = prompt('패스워드 입력하셈.');
  let regex = /themaster/i;

  if (regex.test(password)) {
    alert('환영.');
  } else {
    alert('실패함.');
  }
} else if (user === '' || user === null) {
  alert('취소됨.');
} else {
  alert('모르는 사람 따라가지 말랬음.');
}
