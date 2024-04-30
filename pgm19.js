function reverseStr(str) {
  let strArr = str.split(" ");
  let arr = []
  for(let i=strArr.length - 1; i>=0;i--){
    arr.push(strArr[i])
  }
  return arr.join(' ');
}

function reverseFn(str){
  return str.split(" ").reverse().join(" ")
}
console.log("reverse string", reverseStr("Happy Interview"));
console.log("reverse string", reverseFn("Happy Interview"));


// function reverseStr(str) {
//   let reversed = "";
//   for (i = str.length - 1 ; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }