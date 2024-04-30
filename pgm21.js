const array = [1,2,3,2,8,9,8]

function findDuplicate (array){
   return array.filter((ele, index,arr) => arr.indexOf(ele) != index)
}

console.log(findDuplicate(array))