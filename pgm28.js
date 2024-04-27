// Write a program to return the number of times the specified character appears.

const noOfChar = (string, chkCharacter) => {
  let arr = string.split("");
  let count = 0;
  for (char of arr) {
    if (char.toLowerCase() === chkCharacter.toLowerCase()) {
      count++;
    }
  }
  return count;
};

// Second Method
const noOfCharReduce = (string, chkCharacter) => {
  let charPresentCount = string.split("").reduce((acc, char) => {
    if (char.toLowerCase() === chkCharacter.toLowerCase()) {
      acc++;
    }
    return acc;
  }, 0);
  return charPresentCount;
};

console.log("No of character", noOfChar("Sajiitha", "a"));
console.log(
  "No of character using reduce method",
  noOfCharReduce("Saaajiitha", "a")
);
