

// variable

// var    - global scope

// let    - block scope

// const  - block scope


// rules of variables


// var  

var appleBox = 10   // declaration  // intialiazation

appleBox = 15       // reuse        // reintialization

var appleBox = 20   // redeclration

console.log(appleBox)


// let

let one = 50

one = 30

// let one = 10 not accept redeclration

console.log(one);


// const 

const two = 40

// two = 50  not accepted reuse

// const two = 60 not accepted redeclration

console.log(two);


// examples



var a = 10;
a = 20;
var a = 30;
console.log(a);  // 30 



let x = 5;
x = 15;
console.log(x);  // 15
let x = 25;      // syntex error  


const pi = 3.14;
pi = 3.15;
console.log(pi); // type error


var item = "pen";
item = "book";
console.log(item); // "book"


let price = 100;
price = 150;
console.log(price); // 150


const name = "JavaScript";
console.log(name);  // "javascript"
const name = "JS";  // syntex error


var qty = 5;
var qty = 10;
console.log(qty);   // 10


let age = 20;
let age = 25;
console.log(age);  // syntex error


const country = "India";
console.log(country);  // "india"
country = "USA";       // type error


var p = 1;
p = 2;
p = 3;
console.log(p);     // 3


let score = 40;
score = 45;
score = 50;
console.log(score);  // 50
