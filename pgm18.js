const arr = [45, 78, 56, 890]

function reverseArr(arr){
  let reversedArray = [];
  for(i = arr?.length - 1; i>=0; i--){
    reversedArray.push(arr[i])
  }
  return reversedArray;
}
console.log(reverseArr(arr))