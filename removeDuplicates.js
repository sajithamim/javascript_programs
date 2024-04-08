// Remove Duplicates from Array
console.log('remove duplicates', removeDuplicates([1, 2, 1, 2, 3, 4]))
console.log('remove duplicates', removeDuplicates([1, 2, 3, 4]))
console.log('remove duplicates', removeDuplicates([]))
function removeDuplicates(arr) {
  //   return new Set(arr)

  //   Output of above condition remove duplicates Set(4) { 1, 2, 3, 4 }
  //   remove duplicates Set(4) { 1, 2, 3, 4 }
  //   remove duplicates Set(0) {}

  // return [new Set(arr)]

  // Output of second condition
  // remove duplicates [ Set(4) { 1, 2, 3, 4 } ]
  // remove duplicates [ Set(4) { 1, 2, 3, 4 } ]
  // remove duplicates [ Set(0) {} ]

  return [...new Set(arr)]
  
  // Output of third condition
  //   remove duplicates [ 1, 2, 3, 4 ]
  // remove duplicates [ 1, 2, 3, 4 ]
  // remove duplicates []
}
