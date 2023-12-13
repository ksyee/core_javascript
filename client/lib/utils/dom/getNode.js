const getNode = (node) => {
  if (typeof node !== 'string') throw new Error('문자열을 입력하세요.');
  return document.querySelector(node);
};
