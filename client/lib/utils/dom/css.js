/* class 함수 */
const addClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new Error('className is not string');
  }

  node.classList.add(className);
};

const removeClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);
  if (className === undefined) {
    node.classList = '';
    return;
  }
  if (typeof className !== 'string') {
    throw new Error('className is not string');
  }

  node.classList.remove(className);
};

const toggleClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new Error('className is not string');
  }

  node.classList.toggle(className);
};

/* style 함수 */
const getCss = (node, prop) => {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new SyntaxError('prop is not string');
  }
  return getComputedStyle(node).getPropertyValue(prop);
};

const setCss = (node, prop, value) => {
  if (typeof node === 'string') node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new SyntaxError('prop is not string');
  }
  node.style[prop] = value;
};

const css = (node, prop, value) =>
  value === undefined ? getCss(node, prop) : setCss(node, prop, value);
