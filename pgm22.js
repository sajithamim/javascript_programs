const arr = [1, 2, 5, 68, 98, 68, 2]

function countDuplicates(arr) {
  return arr.reduce((obj, num) => {
    if (obj[num] == undefined) {
        obj[num]=1;
        return obj;
    }else{
        obj[num]++;
        return obj;
    }
  }, {})
}
console.log(countDuplicates(arr))
