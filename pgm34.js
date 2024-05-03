const checkStartsWith = (str, s) => {
    return str.startsWith(s)
}

const checkEndsWith = (str) =>{
    return str.endsWith('%')
}
console.log(checkStartsWith("sajitha", '%'))
console.log(checkStartsWith("Sajitha", 's'))
console.log(checkStartsWith("sajitha", 's'))
console.log(checkEndsWith("sajitha%"))
console.log(checkEndsWith("sajitha"))