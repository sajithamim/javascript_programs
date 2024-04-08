const string = "arranged sideways, like a person lying"

function countVowel(str){
  let vowels= ["a", "e", "i", "o","u"]
let arr =  string.split("");
let count = 0;
  for(let char of arr){
    if(vowels.includes(char.toLowerCase())){
        count++;
    }
  }
  return count;
}

console.log("count of vowels", countVowel(string))


const vowels = string.match(/[aeiou]/gi);
console.log("vowels", vowels)