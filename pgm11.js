//  11. how to convert first letter of string in uppercase
const convertFirstUppercase = (str) => {
  if (!/\s/.test(str)) { 
    // above lines checks the white space to confirm whether the parameter is a word or more than one.
    if (str.charAt(0) != str.charAt(0).toUpperCase()) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else{
      return str;
    }
  } else {
    let arr = str.split(" ");
    let capitalizedSentence = "";
    for (let word of arr) {
      capitalizedSentence += word.charAt(0).toUpperCase() + word.slice(1) + " ";
    }
    return capitalizedSentence;
  }
};
const convertAllwordsUpper = (str) =>{
  if(!/\s/.test(str)){
    return str.toUpperCase();
  }else{
    let arr = str.split(" ");
    let capitalAll = "";
    for(let word of arr){
      capitalAll += word.toUpperCase() + " ";
    }
    return capitalAll;
  }
}

const capitaAllWordForLoop = (str) => {
  if(!/\s/.test(str)){
    return str.toUpperCase()
  }else{
    let arr = str.split(" ");
    let capitaAllWord = "";
    for(i = 0 ; i< arr.length; i++){
      capitaAllWord += arr[i].toUpperCase() + " "
    }
    return capitaAllWord;
  }
 
}

const convertFirstUppercaseUseMap = (str) =>{
  let arr = str.split(" ");
  return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1) + " ").join(" ")
}

console.log(convertFirstUppercase("indonesia"));
console.log(convertFirstUppercase("indonesia love"));
console.log(convertFirstUppercase("Indonesia"));
console.log(convertFirstUppercase("I hate you"))

console.log(convertFirstUppercaseUseMap("India is my country"))

console.log(convertAllwordsUpper("I hate you"))
console.log(convertAllwordsUpper("Single"))

console.log("capitalise all word using for loop", capitaAllWordForLoop("will survive and come back"));
console.log("capitalise all word using for loop", capitaAllWordForLoop("survive"));