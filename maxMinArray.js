const array = [1, 9,55,87,47,10955]

console.log("LArgest number", array.reduce((pre,cur) => pre > cur ? pre :cur) )

console.log("smallest number", array.reduce((pre,cur) => pre < cur ? pre :cur) )