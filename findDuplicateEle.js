const array = [1,2,3,2,8,9,8]

const duplicates = array.filter((ele,index,arr) => arr.indexOf(ele) !== index)
console.log("How To find duplicate elements in array", duplicates)