// How to find the missing number in a given integer array of 1 to 10.
function missingNo(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  let missArray = [];
  for (let i = minValue; i<=maxValue; i++){
    if(arr.indexOf(i) < 0 ){
      missArray.push(i)
    }
  }
  return missArray;
}
console.log(missingNo([1, 2, 3, 5, 9, 10]));
