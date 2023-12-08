/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(`extractCharacter: ${extractCharacter}`);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log(`slice: ${slice}`);

let subString = message.substring(2, 5);
console.log(`subString: ${subString}`);

let subStr = message.substr(2, 5);
console.log(`subStr: ${subStr}`);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('Less');
console.log(`indexOf: ${indexOf}`);

let lastIndexOf = message.lastIndexOf('is');
console.log(`lastIndexOf: ${lastIndexOf}`);

let browserName = '';

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'Edge';
      break;
    case agent.indexOf('opr') > -1 && !!window.opr:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'Internet Explorer';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    default:
      browserName = '이건 뭐임';
  }
}

checkBrowser();

console.log(`browserName: ${browserName}`);

let includes = message.includes('Less');
console.log(`includes: ${includes}`);

let startsWith = message.startsWith('Less');
console.log(`startsWith: ${startsWith}`);

let endsWith = message.endsWith('.');
console.log(`endsWith: ${endsWith}`);

// 공백 잘라내기
let str = '     a   b    c   d  ';
let trimLeft = str.trimLeft();
console.log(`trimLeft: ${trimLeft}`);

let trimRight = str.trimRight();
console.log(`trimRight: ${trimRight}`);

let trim = str.trim();
console.log(`trim: ${trim}`);

// 문자열 치환
let regExp = /\s/g;

console.log(`replace: ${str.replace(regExp, '')}`);

// 정규 표현식을 사용한 문자열 치환(함수)
function normalText(string) {
  return string.replace(regExp, '');
}

console.log(`normalText: ${normalText(str)}`);

// 텍스트 반복
let repeat = message.repeat(3);
console.log(`repeat: ${repeat}`);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log(`toLowerCase: ${toLowerCase}`);

let toUpperCase = message.toUpperCase();
console.log(`toUpperCase: ${toUpperCase}`);

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase = (str) => {
  return str.replace(/[-_](.)/g, (match, group1) => {
    return group1.toUpperCase();
  });
};

console.log(`toCamelCase: ${toCamelCase('hello_world')}`);

let toPascalCase = (str) => {
  let camelCase = toCamelCase(str);
  return camelCase[0].toUpperCase() + camelCase.slice(1);
};

console.log(`toPascalCase: ${toPascalCase('hello_world')}`);
