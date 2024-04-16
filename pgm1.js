// Writ a JS program to check 2 numbers and return true if one of the number is 100 or sum is 100
function checkArguments(num1, num2){
  return !!(num1 === 100 || num2 === 100 || num1 + num2 === 100)
}

console.log(checkArguments(25, 59))
console.log(checkArguments(100, 59))
// above function is the short form of below mentioned fn:
// function checkArguments(num1, num2) {
//     if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
//       return true
//     } else {
//       return false
//     }
//   }