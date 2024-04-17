function convertToObj(arr){
   return arr.reduce((acc, iter, index) => ({...acc, [index]: iter}), {})
}
console.log(convertToObj([1,2,3,4]))