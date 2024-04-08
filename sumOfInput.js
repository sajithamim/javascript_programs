// Function that takes a no as input and returns the sum of its digits. 

console.log(sumOfDigit(1234));
console.log(sumOfDigit(2020));

console.log(sumOfDigit([1,2,3,4,5]));

function sumOfDigit(num){
    if(Array.isArray(num)){
        return num.reduce((acc, curr) => acc + curr, 0)
    }
    else{
        // First convert it to string , then split , then add using reduce method
        return num.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0)
    }
    
}