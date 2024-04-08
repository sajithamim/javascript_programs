// Write a function to find out whether the given string is paliandrome or not

const paliandrome = (word) => {
    let rev_string = word.split("").reverse().join("");
    return rev_string === word ? "It is a palindrome" : "It is not a paliandrome"
}

console.log("Paliandrome:", paliandrome("aneena"))
console.log("Paliandrome:", paliandrome("A man,a plan, a canal"))
console.log("Paliandrome:", paliandrome("racecar"))