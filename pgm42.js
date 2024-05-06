const arrangeAlphabeticalOrder = (str) => {
    return str.split("").sort().join("")
}

console.log(arrangeAlphabeticalOrder('apple'))