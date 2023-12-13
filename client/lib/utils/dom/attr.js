const getAttr = (elem, attr) => {
  if (typeof attr !== 'string') {
    throw new Error('두 번째 인자는 문자열이어야 합니다.');
  }
  const node = getNode(elem);
  return node.hasAttribute(attr) ? node.getAttribute(attr) : '그런 거 없어요';
};

const setAttr = (node, attr, value) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof attr !== 'string')
    throw new TypeError('두 번재 인자는 문자열이어야 합니다.');

  if (value === '') {
    node.removeAttribute(attr);
    return;
  }

  if (!value) throw new Error('세 번째 인자는 필수입니다.');

  if (attr.startsWith('data-')) {
    attr = attr.slice(5);
    node.dataset[attr] = attr;
    return;
  }

  node.setAttribute(attr, value);
};

const attr = (node, attr, value) =>
  value === 'undefined' ? getAttr(node, attr) : setAttr(node, attr, value);
