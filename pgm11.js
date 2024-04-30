const convertToUpper = (str) => {
  let arr = str.split(" ");
  let capitalizedSentence = "";
  for (let word of arr) {
    capitalizedSentence += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }
  return capitalizedSentence.trim(" ");
};

const pickAndCapitalise = (str) => {
  let arr = str.split(" ");
  return arr.map((item) => item.charAt(0).toUpperCase());
};

const capitaAllFirstWord = (str) => {
  let arr = str.split(" ");
  return arr
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
};

const capitaAllWord = (str) => {
    let arr = str.split(" ");
    let capitalAll = "";
    for (let i = 0; i < arr.length; i++) {
      capitalAll += arr[i].toUpperCase();
      if (i !== arr.length - 1) {
        capitalAll += " "; // Add a space if it's not the last word
      }
    }
    return capitalAll;
  };
console.log("Convert First letter to caps", convertToUpper("This is my world"));
console.log(
  "Pick firs letter from all words and capitalise it",
  pickAndCapitalise("I hate you")
);
console.log(
  "capitalise first letter of all word",
  capitaAllFirstWord("I am alone")
);
console.log("capitalise all word", capitaAllWord("will survive and come back"));
