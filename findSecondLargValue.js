const array = [1,89,52,68,97]

const secondLargestValue = (arr) => {
    const firstLargestValue = Math.max(...arr)      
    const index = arr.indexOf(firstLargestValue)
    arr.splice(index,1)
    const secLargestValue = Math.max(...arr)
    return secLargestValue;
}
// Step 1: Find the first largest element
// Step 2 Find the index of first largest element
// Step 3 remove that index from array.
// Step 4 Find the next largest value
console.log("How To find second Largest value in array|", secondLargestValue(array))