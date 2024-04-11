
const convertToUpper  = (string) => {
    let strArray = string.split(" ");
   return strArray.map(item => item.charAt(0).toUpperCase())
}
console.log("Convert First letter to caps", convertToUpper("This is my world"))