console.log("hello world")
//declare veriable
let number = 10;
let message = "hello, Javascript";
let isLearning = true;
number = 65;

console.log(number);
console.log(message);
console.log(isLearning);

if (true) {
    let blockscoped = "i am limited to this block"
    var functionscoped = "I exist outside the block too"
    console.log(blockscoped)
}
//console.log(blockscoped);
console.log(functionscoped);

//const is used for values that are constant and cant be change in the programe
//const pi = 3.24159;
let pi = 3.24159;
pi = 4.23;
console.log(pi);
let name = "Acidri francis";           
console.log(`My name is ${name}`);



//setting an alert
alert("Hello world, this is my javascript")
prompt("What is your Name?");



function add(p1, p2) {
 var sum = p1 + p2    
}
console.log("the sum of the values entered" + sum)

