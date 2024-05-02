const wordExistOrNot = (string, chkString) => {
    return string.includes(chkString)
}
console.log(wordExistOrNot("This is the gateway of India", "the"))
console.log(wordExistOrNot("This is demo part", "the"))