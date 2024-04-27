let numbers = [1,2,2,3,4,2,5,5,9,5,6,7,6]

let count = {}

for (let element of numbers){
    count[element] = (count[element] || 0) + 1;
}
console.log(count)