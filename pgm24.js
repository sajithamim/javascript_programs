
function calAvg(arr){
    return arr.reduce((acc, iter) => acc + iter, 0)/arr.length
}

console.log(calAvg([1,2,3,4,5,6]))
console.log(calAvg([100,200,300,400,500,600]))