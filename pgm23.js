const arr = [1,2,4,6,7,8,9,10]
const missArray=[]

function misingNo(arr){
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    for(i=minValue; i<maxValue; i++){
        if (arr.indexOf(i) < 0){
            missArray.push(i)
        }
    }
    return missArray;
}
console.log(misingNo(arr))