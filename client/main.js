import { jujeobData } from './data/data.js';
import {
  clearContents,
  copy,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  shake,
  showAlert,
} from './lib/index.js';
/* global gsap */

const nameField = getNode('#nameField');
const submit = getNode('#submit');
const result = getNode('.result');

const handleSubmit = (e) => {
  e.preventDefault();

  const name = nameField.value;
  const list = jujeobData(name);
  const pick = jujeobData(name)[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 입력해주세요.', 1500);
    shake.restart();
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '재대로 된 이름을 입력해주세요.', 2000);
    shake.restart();
  }

  clearContents(result);
  insertLast(result, pick);
};

const handleCopy = () => {
  const text = result.textContent;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료.');
  });
};

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
