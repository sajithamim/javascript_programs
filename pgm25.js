// # 25. Write a fn that returns the longest word in the sentence.
function reverseLongestWord(str){
    const words = str.split(" ");
    let longest = "";
    for(let word of words){
        if(word?.length > longest?.length){
            longest =  word
        }
       
    }
    return longest;
}

console.log(reverseLongestWord("I love my India"))