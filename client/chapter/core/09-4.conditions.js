/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@email.io';
receivedEmailAddress = emailAddress || 'user@email.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH); // 10px
console.log(null ?? WIDTH); // 10px

console.log(undefined || WIDTH); // 10px
console.log(undefined ?? WIDTH); // 10px

console.log(boolean || WIDTH); // 10px
console.log(boolean ?? WIDTH); // false

console.log('' || WIDTH); // 10px
console.log('' ?? WIDTH); // ''

// nullish 병합 연산자는 null 또는 undefined 값이 아닌 경우에만 우항의 값을 반환합니다.

// Logical Assignment Operators
let x;
let y;

x ||= y; // x가 falsy 값이면 y를 할당합니다.
x &&= y; // x가 truthy 값이면 y를 할당합니다.
x ??= y; // x가 null 또는 undefined 값이면 y를 할당합니다.

let title;

title ||= '어쩌구 저쩌구';

console.log(title);

let person = {
  firstName: 'kang',
  lastName: 'seonyeong',
};

person.lastName &&= 'call';

console.log(person);

let user = {
  userName: 'kindtiger',
};

user.nickName ??= 'tiger';

console.log(user);
