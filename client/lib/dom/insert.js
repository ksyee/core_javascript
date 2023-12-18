import { getNode } from './getNode.js';

const insertBefore = (node, text) => {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforebegin', text);
};

const insertFirst = (node, text) => {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterbegin', text);
};

const insertLast = (node, text) => {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('beforeend', text);
};

const insertAfter = (node, text) => {
  if (typeof node === 'string') node = getNode(node);

  node.insertAdjacentHTML('afterend', text);
};

export { insertAfter, insertBefore, insertFirst, insertLast };
