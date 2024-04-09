// Write a program to convert array to an object
let array = [1,2,3,4,5]

let obj = array.reduce((acc, iterator, index) => ({...acc, [index]: iterator}), {})

console.log("object formed", obj)

// output: object formed { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

const array2 = [25,56,89,56];

console.log("convert", array2.reduce((acc, iterator, index) => ({...acc, [index]: iterator}), {}))