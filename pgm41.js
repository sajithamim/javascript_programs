// HOw to reverse a number?
const reverseNum = (num) => {
  let numString = num.toString();
  return Number(numString.split("").reverse().join(""))
};
const reverseWithoutRevereFn = (num) => {
  let arr = num.toString().split("");
  let reverseNum = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseNum += arr[i];
  }
  return Number(reverseNum);
};
console.log(reverseNum(322));
console.log(reverseNum(12345));
console.log(reverseWithoutRevereFn(987654321));
