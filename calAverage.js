// Write a fn called calculateAvg that takes an array of numbers as input and returns the avg of those numbers.
const calculateAvg = (num) => {
    return num.reduce((acc, curr) => acc + parseInt(curr), 0)/num.length
}

console.log("Calculate avg", calculateAvg([1,2,3,4,5]))
console.log("Calculate avg", calculateAvg([5,10,2,8]))