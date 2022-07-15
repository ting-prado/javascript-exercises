//My naive solution:
// const palindromes = function (str) {
// let noSpaceStr = str.replace(/[\s,!.#:;']/g, '');
// let lowercaseStr = noSpaceStr.toLowerCase();
// let firstHalf = lowercaseStr.slice(0, lowercaseStr.length/2);
// let inStart = '';
// if(lowercaseStr.length % 2 == 0) {
//     inStart = lowercaseStr.length/2;
// }
// else {
//     inStart = lowercaseStr.length/2+1;
// }
// let secondHalf = lowercaseStr.slice(inStart, lowercaseStr.length);
// let comStr = '';
// for(let i = secondHalf.length-1; i>=0; i--) {
//     comStr += secondHalf[i];
// }
// return firstHalf == comStr ? true : false;
// }

//Short solution:
const palindromes = function (string) {
  processedString = string.toLowerCase().replace(/[^A-Za-z]/g, '');
  return processedString.split('').reverse().join('') == processedString;
};

// Do not edit below this line
module.exports = palindromes;
