const reverseEachWordforMethod = (str) => {
  if (!/\s/.test) {
    return str.split("").reverse().join();
  } else {
    let arr = str.split(" ");
    let reverseString = "";
    for (let word of arr) {
      reverseString += word.split("").reverse().join("") + " ";
    }
    return reverseString;
  }
};

const reverseEachWordMap = (str) => {
  let reverseString = str.split(" ").map(function (word) {
    return word.split("").reverse().join("");
  });
  return reverseString.join(" ");
};

const reverseWithoutReverse = (str) => {
  if (!/\s/.test(str)) {
    let output = "";
    console.log(str.length);
    for (i = str.length - 1; i >= 0; i--) {
      output += str[i];
    }
    return output;
  } else {
    let arr = str.split(" ");
    let reverseArr =  arr.map(function (item) {
      let output = "";
      for (i = item.length - 1; i >= 0; i--) {
        output += item[i];
      }
      return output;
    });
    return reverseArr.join(" ")
  }
};
console.log(reverseEachWordforMethod("Honey world"));
console.log(reverseEachWordforMethod("Honey"));

console.log(reverseEachWordMap("Saare jaha se achas"));

console.log(reverseWithoutReverse("Humm"));
console.log(reverseWithoutReverse("Tumm hamre hom"));
