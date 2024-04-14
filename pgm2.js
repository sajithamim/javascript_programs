// Write a program to get the extension of a file.

function findExtension(str){
  return str.slice(str.lastIndexOf("."));
}
console.log(findExtension("index.html"))