export const generateId = function () {
  return Math.floor(Math.random() * 10000);
};

export function isDef(val: any) {
  return val !== undefined && val !== null;
}
export function isKorean(text: any) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
