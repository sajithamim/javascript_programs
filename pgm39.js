// 39. How to check if a number is an integer or not
const chkInteger = (num) => {
    if(num%1 === 0){
      return  console.log("Integer")
    } else{
        return console.log("not Integer")
    }
}
console.log(chkInteger(50))
console.log(chkInteger(50.1))