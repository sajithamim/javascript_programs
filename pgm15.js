
function bubbleSort(arr){
  for (i=0; i < arr?.length ;i++){
    for(j=0; j< arr?.length ; j++){
      if(arr[i] < arr[j]){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
const unsortedArray = [5, 3, 8, 1, 2]
const sortedArray = bubbleSort(unsortedArray)
console.log(sortedArray) // Output: [1, 2, 3, 5, 8]
