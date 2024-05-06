const convertFirstLetterUpper = (str) =>{
    let arr = str.split(" ")
    let firstLetterUpper =[]
    for (let word of arr){
        firstLetterUpper += word.charAt(0).toUpperCase() + word.slice(1) + " "
    }
    return firstLetterUpper ;
}

const convertFirstLetterUpperSubString = (str)=>{
    let arr = str.split(" ");
    return arr.map((item) => item.charAt(0).toUpperCase() + item.substring(1)).join(" ")
}

console.log(convertFirstLetterUpper("i love orange"))
console.log(convertFirstLetterUpperSubString("Sub string method"))