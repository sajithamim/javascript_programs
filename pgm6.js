function convertToarr(arr){
   return arr.reduce((acc,itera, index) => ({...acc, [index]: itera}),{})
}
console.log(convertToarr([1,2,3,4,5]))