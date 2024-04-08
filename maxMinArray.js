// Write a fn that takes an array of numbers and return maximum numbr in arary

//  First method 
// const maxNum = (arr) => {
//     return arr.reduce((prev, curr) => prev > curr ? prev : curr)
// }


//  Second method 
const maxNum = (arr) => {
    return Math.max(...arr)
}

console.log("Maximum number", maxNum([1,9,125, 485]))
console.log("Maximum number", maxNum([-10,-90,-125, -485]))