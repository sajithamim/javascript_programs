// Write a program to get the extension of a file.

const getFileExtension = (str) =>{
    return str.slice(str.lastIndexOf('.'));
}
console.log(getFileExtension("webconfig.hmtl"))