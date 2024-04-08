// Write a program to return the number of times the specified character appears.

const noOfChar = (string, chkCharacter) => {
  let arr = string.split('')
  let count = 0
  for (let char of arr) {
    if (char.toLowerCase() === chkCharacter.toLowerCase()) {
      count++
    }
  }
  return count
}


// Second Method
const noOfCharReduce = (string, chkCharacter) => {
    totalCount = string.split("").reduce((acc, curr) => {
        if(curr.toLowerCase() === chkCharacter.toLowerCase()){
            acc++;
        }
        return acc;
    }, 0)
    return totalCount;

}

console.log('No of character', noOfChar('Sajiitha', 's'))
console.log('No of character using reduce method', noOfCharReduce('Saaajiitha', 'a'))