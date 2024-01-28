/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
      let digits = i.toString().split('').map(e => parseInt(e));
      let c = 0;
      for (const d of digits) {
        if (i % d !== 0) {       
           c++;
           break;
        } 
      }
      if (c === 0) {
        result.push(i);
      }
    }
    return result;
  };
  