const addEleOfArr = (arr) => {
  let result = 0;
  for (let ele of arr){
    result += ele;
  }
  return result
};

const addEleOfArrforEach = (arr) =>{
let result = 0;
arr.forEach(function(ele){
    if(typeof ele === 'number'){
         result = result + ele
    }
})
return result;
}
console.log(addEleOfArr([1, 2, 3]));
console.log(addEleOfArr([100,300]));
console.log(addEleOfArrforEach([200, "lion", "Peas", 300, 500]));