// Write a program to get the extension of a file.
function getExtension(nameOfFile){
   return nameOfFile.slice(nameOfFile.lastIndexOf('.'))
}

console.log("Get extension", getExtension("index.html"))