//  Write a fn arrayAreEqual which returns true if array are equal else false (ie: contains the same elem in same order)

function checkArray (arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    return arr1.every((currValue,index) => currValue === arr2[index])
}



console.log("array same or not", checkArray([1,2,3], [1,2,3]))
console.log("array same or not", checkArray([1,2,3], [3,4,5]))
console.log("array same or not", checkArray([1], [3,4,5]))
console.log("array same or not", checkArray([], []))

