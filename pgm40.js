// # 40. Find out the duplicate values
const duplicateValues = (arr) => {
    return arr.concat(arr)
};
console.log(duplicateValues([1, 5, 5, 8, 1, 2]));
