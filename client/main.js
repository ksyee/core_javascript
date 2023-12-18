import { getNode, clearContents, insertLast } from './lib/index.js';

const firstNumber = getNode('#firstNumber');
const secondNumber = getNode('#secondNumber');
const result = getNode('.result');

const handleInput = () => {
  const firstNumberValue = firstNumber.value;
  const secondNumberValue = secondNumber.value;
  let total = +firstNumberValue + +secondNumberValue;

  clearContents(result);
  // result.textContent = total;
  insertLast(result, total);
};

firstNumber.addEventListener('input', handleInput);

secondNumber.addEventListener('input', handleInput);
