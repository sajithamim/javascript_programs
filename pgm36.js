// Write a function to find out whether the given string is paliandrome or not

const paliandrome = (str) =>{
    if(!/\s/.test(str)){
        let reverse = str.split("").reverse().join("")
        if(reverse == str){
           return console.log("Its is a paliandrome")
        }else{
           return console.log("Its is not a paliandrome")
        }
    }else{
        let reverse = str.split(" ").reverse().join("")
        if(reverse == str){
           return console.log("Its is a paliandrome")
        }else{
           return console.log("Its is not a  paliandrome")
        }
    }
   
     
}
console.log("Paliandrome:", paliandrome("aneena"))
console.log("Paliandrome:", paliandrome("A man,a plan, a canal"))
console.log("Paliandrome:", paliandrome("racecar"))

