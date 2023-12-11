/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
// console.log(Array.isArray([])); // true

const isArray = (parm) => Array.isArray(parm);
const isNull = (parm) =>
  Object.prototype.toString.call(parm) === '[object Null]';

const normalIsArray = (parm) =>
  Object.prototype.toString.call(parm) === '[object Array]';

console.log(isArray([])); // true

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: 'kim',
    job: 'FE Dev',
    age: 25,
    imageSrc: 'ASkjdh34',
  },
  {
    id: 1,
    name: 'lee',
    job: 'FE Dev',
    age: 28,
    imageSrc: 'Jbkjdh9',
  },
  {
    id: 2,
    name: 'jo',
    job: 'BE Dev',
    age: 30,
    imageSrc: 'Kjdh34',
  },
  {
    id: 3,
    name: 'park',
    job: 'BE Dev',
    age: 35,
    imageSrc: 'Kjdh34',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
arr.forEach((el, idx) => {
  console.log(el, idx);
});

// people.forEach((person) => {
//   console.log(person);
// });

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// const reverseArray = arr.reverse();
const reverseArray2 = arr.toReversed();

console.log(reverseArray2);
console.log(arr);
// console.log(reverseArray);
/* splice */
console.log(arr.toSpliced(1, 2, 'javascript', 'css', 'react'));

// sort
const a = arr.toSorted((a, b) => {
  return b - a;
});

console.log(a);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
let job = people.map(({ name, job, age }, idx) => {
  return /* html */ `
    <div class='userCard'>
      <div class='imageField'>
        <img src='https://picsum.photos/200/200?random=${idx}' alt='user image' />
      </div>
      <span>이름: </span>
    </div>
  `;
});

console.log(job);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
let find = people.find((el) => el.name === 'lee');
console.log(find);
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
let young = people.filter((el) => el.age < 30);

console.log(young);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

console.log(totalAge);
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join
