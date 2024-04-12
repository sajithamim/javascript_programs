// Output based questions

function sayHi(){
    console.log("Output based pblm 1(a)", name);
    console.log("Output based pblm 1(b)", age);
    var name='Sadia';
    var age =30;
}

sayHi();

// ////////////////////////////////////////////////////////////////////////////

let count = 0;

function printCount(){
    if(count == 0){
        let count = 3;
        console.log("Output based pblm 2(a)", count);
    }
    console.log("Output based pblm 2(a)", count);
}

printCount()
// ////////////////////////////////////////////////////////////////////////////

console.log(1);
setTimeout(() => console.log("Output based pblm 3(a)",2),1000)
setTimeout(() => console.log("Output based pblm 3(b)", 3),0)
console.log(4);

// ////////////////////////////////////////////////////////////////////////////

setTimeout(() => {
    console.log("Output based pblm 4", i);
    var i = 1;
}, 1000)

// ////////////////////////////////////////////////////////////////////////////

// let a = {y:10};

// a.x = a;
// console.log(JSON.stringify(a))
// // TypeError: Converting circular structure to JSON
// //     --> starting at object with constructor 'Object'
// //     --- property 'x' closes the circle

// ////////////////////////////////////////////////////////////////////////////

console.log("Output based pblm 5 a", 2 + '2');
console.log("Output based pblm 5 b", 2 - '2');
console.log("Output based pblm 5 c", '4' - '2');
console.log("Output based pblm 5 d", '2' - 2);
console.log("Output based pblm 5 e", 1 + +'2' + 2); 
console.log("Output based pblm 5 f", 1 + '2' + +"2"); 
console.log("Output based pblm 5 g", {} === {}) 
console.log("Output based pblm 5 h", {} == {}) 
// ////////////////////////////////////////////////////////////////////////////
// Difference between map and forEach

const arr = [1,2,3,4,5]

const mapMethod = arr.map((item) => item * 2)
const forEachMethod = arr.forEach((item,i) => {arr[i] = item * 2})
console.log("mapMethod", mapMethod);
console.log("forEachMethod", forEachMethod);

 // ////////////////////////////////////////////////////////////////////////////

 (function(){
    var a=b=3
 }())

 console.log("Output based pblm 6",typeof a)
 console.log("Output based pblm 6",typeof b)
//  o/p Output based pblm 6 undefined
// Output based pblm 6 number


 // ////////////////////////////////////////////////////////////////////////////

 function foo(){
    return 
    {
        name: 'Anil'
    }
 }

 console.log(" Output based pblm  7", foo())

//  o/p undefined(note: return{} must be in a single line)
// ////////////////////////////////////////////////////////////////////////////
function test(){
    function foo(){
        return 100;
    }
    return foo();
    function foo(){
        return 10;
    }
}
console.log("Output based pblm  8", test())

// Output based pblm  8 10 (Hoisting)