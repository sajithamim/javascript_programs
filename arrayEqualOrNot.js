//  Write a fn arrayAreEqual which returns true if array are equal else false (ie: contains the same elem in same order)
const arrayAreEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    return arr1.every((currVal,index) => currVal === arr2[index] )
} 

console.log(arrayAreEqual([1,2,3], [1,2,3]))
console.log(arrayAreEqual([1,2,4], [1,2,3]))
console.log(arrayAreEqual([], []))

// Function Definition:

// javascript
// Copy code
// const arrayAreEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     return arr1.every((currVal, index) => currVal === arr2[index]);
// }
// Length Check:

// The function first checks if the lengths of the two arrays arr1 and arr2 are not equal. If they are not equal, it means the arrays cannot be equal, so the function immediately returns false.
// javascript
// Copy code
// if (arr1.length !== arr2.length) {
//     return false;
// }
// Comparison of Array Elements:

// If the lengths of the arrays are equal, the function proceeds to compare each element of the arrays.
// It uses the every() method, which tests whether all elements in the array pass the provided callback function.
// The callback function compares the elements at the same index position in both arrays (currVal from arr1 and arr2) using strict equality (===).
// The every() method returns true if the callback function returns true for every element in the array. If any comparison returns false, the function stops iterating and returns false.
// javascript
// Copy code
// return arr1.every((currVal, index) => currVal === arr2[index]);
// Function Invocation:

// Finally, the arrayAreEqual function is invoked with different arrays to test its functionality.
// javascript
// Copy code
// console.log(arrayAreEqual([1, 2, 3], [1, 2, 3])); // Output: true
// console.log(arrayAreEqual([1, 2, 4], [1, 2, 3])); // Output: false
// console.log(arrayAreEqual([], [])); // Output: true (both arrays are empty)
// Overall, the arrayAreEqual function checks if two arrays are equal by comparing their lengths and each element at corresponding index positions. If all elements are equal and the lengths are the same, the function returns true; otherwise, it returns false.