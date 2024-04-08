// Write a pgm to sort an array in ascending order

const sortAscend = (arr) => {
    return arr.sort((a,b) => a-b);
}

console.log("Sort an array", sortAscend([1,9,2,5,78,102]))
console.log("Sort an array", sortAscend([1005,9,289898,5,78,102]))