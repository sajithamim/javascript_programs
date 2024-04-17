function calculateAvg (arr) {
    let avg =  arr.reduce((acc, iter) => acc + parseInt(iter), 0) / arr?.length;
    return avg
}
console.log(calculateAvg([1,2,3,4,5,6]))