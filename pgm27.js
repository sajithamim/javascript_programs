
function findMedian(arr){
    sortedArray = arr.sort((a,b) => a - b )
    let middleIndex = Math.floor(sortedArray?.length / 2)
    if(sortedArray?.length%2 != 0){
        
        console.log("mi", middleIndex)
    } else{

    }
}

console.log(findMedian([1,2,3,4,5]))
console.log(findMedian([1,2,3,4]))