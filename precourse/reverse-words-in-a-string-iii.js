/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    let result = "";
    for (const word of words) {
      if (result) {
        result = result + ` ${word.split('').reverse().join('')}`;
      } else {
        result = result + `${word.split('').reverse().join('')}`;
      }
    }
    return result;
  };
  