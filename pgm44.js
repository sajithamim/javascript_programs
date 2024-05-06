const chkOccurences = (str) =>{
    let occurences = {};
    str.split("").forEach(function(ele){
        if(occurences.hasOwnProperty(ele)){
            occurences[ele]++;
        }else{
            occurences[ele] =1;
        }
    })
    return occurences
}

console.log(chkOccurences("orange"))
console.log(chkOccurences("malayalam"))