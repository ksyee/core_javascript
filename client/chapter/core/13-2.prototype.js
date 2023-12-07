/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor(name) {
    // const { name, age } = options;
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }
  get eat() {
    return this.stomach;
  }
  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

const animal = new Animal('토끼');

console.log(animal);

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }

  static bark() {
    return '어흥';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }
}

const 한라산호랑이 = new Tiger('포동이');

console.log(한라산호랑이);
