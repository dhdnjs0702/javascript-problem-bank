/**
 * [(lv.2)객체와-loop.js]
 *
 * countProperties 함수를 작성하세요:
 * - 파라미터 obj
 * - for...in 루프를 사용하여 obj 객체의 소유 키 개수를 반환하세요.
 *
 * @param {object} obj
 * @returns {number}
 */
function countProperties(obj) {
  // TODO
  let i = 0;
  let arr =[];
  for(const e in obj){
    arr[i] = e;
    i++
  }
  return arr.length;
}

export { countProperties };
