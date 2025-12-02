

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



// var a = 10;
// a = 20;
// var a = 30;
// console.log(a);  // 30 



// let x = 5;
// x = 15;
// console.log(x);  // 15
// let x = 25;      // syntex error  


// const pi = 3.14;
// pi = 3.15;
// console.log(pi); // type error


// var item = "pen";
// item = "book";
// console.log(item); // "book"


// let price = 100;
// price = 150;
// console.log(price); // 150


// const name = "JavaScript";
// console.log(name);  // "javascript"
// const name = "JS";  // syntex error


// var qty = 5;
// var qty = 10;
// console.log(qty);   // 10


// let age = 20;
// let age = 25;
// console.log(age);  // syntex error


// const country = "India";
// console.log(country);  // "india"
// country = "USA";       // type error


// var p = 1;
// p = 2;
// p = 3;
// console.log(p);     // 3


// let score = 40;
// score = 45;
// score = 50;
// console.log(score);  // 50


// printing statement

// 1. console.log()

// let one1 = 30

// console.log(one1);
// console.log(100);



// 2. alert()

// alert("hello guys this is our second day")


// 3. confirm()

// confirm("did you like js")

// 4. prompt()

// prompt("what is your name")

// 5. document.writeln()

// document.writeln("hello")


// 1. i want print any value in console side 

// 2. i want to know user age 

// 3. i want know user oppnion yes or no

// 4. i want to show user side my message through pop up

// 5. i want to give copyright in ui side


// console methods

// 1. console.log()

console.log(100);


// 2. console.warn()

console.warn(100);


// 3. console.error()

console.error(100);


// 4. console.clear()

console.clear()


// DataTypes

// 1. primitive dataType 

// 1. string

// "abc"

let name1 = "sri"

console.log(typeof(name1));


// 2. number

let age = 21

console.log(typeof(age));


// 3. boolean

let isLike = true

console.log(typeof(isLike));

// 4. undefined

let all ;

console.log(all);


// 5. null

// let course = prompt("enter your course")

// console.log(course);


// 2. non primitive dataType

// 1. array

// []

let fruit = ["guava","apple","orange","banana","cherry","pineApple","aaa","audi"]

console.log(fruit);
console.log(fruit[3]);
console.log(fruit[0]);
console.log(fruit[fruit.length-1]);





// 2. object

// {}


let things = {
    redFruit : ["apple","cherry"],
    yellowFruit : ["pineApple","banana"],
    car : "audi"
}


console.log(things);

console.log(things.car);

console.log(things.redFruit[1]);


console.clear();


// operator 

// 1. arithmetic operator

// 1. addition   (+)

// 2. subraction (-)

// 3. multiplication (*)

// 4. division   (/)

// 5. exponencial (**)

// 6. modulus (%)

// 7. increament (pre, post) , ++ var , var ++

// 8. decreament (pre, post) , -- var , var --

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 ** 10);
console.log(10 % 10);

let num  = 10

num      = num + num 

 console.log(num);


 let num1 = 2

 num1   = ++num1
 
 console.log(num1);


 let num2 = 2 

 let num3 =num2++

 console.log("num2 : ",num2); // 3
 console.log("num3 : ",num3); // 2




 let num4 = 2       
 let num5 = num4++  // 2
 let num6 = ++num5  // ++num5 = ++2 = 3

 console.log("num4",num4); // 3
 console.log("num5",num5); // 3
 console.log("num6",num6); // 3


 let num7 = 3
 let num8 = num7-- // 3
 let num9 = ++num8 // ++num8 = ++3 = 4

 console.log("num7 : ",num7);  // 2
 console.log("num8 : ",num8);  // 4
 console.log("num9 : ",num9);  // 4
 
 
 
 










// 2. assignment operator

let num10 = 2
let additionVal = 10

num10 += additionVal  // num10 = num10 + additionVal

num10 -= additionVal;  
num10 *= additionVal;  
num10 /= additionVal;  
num10 %= additionVal;  
num10 **= additionVal;  

 console.log(num10);
 

// 3. comparision or relational operator

// meaning     syntex       example       result

// lessThen     <             5<3           false

// greaterThen  >             5>5           false

// lessThenEq   <=            5<=5          true

// greaterThenEq  >=          9>=2          true

// loosyTypeEq    ==          5=="5"        true

// strictlyTypeEq ===         5==="5"       false

// loosyNotEq      !=         5!="5"        false

// strictlyNotEq   !==        5!=="5"       true



// What is the result of 7 < 10?   // true

// What is the result of 15 > 25?  // false

// What is the result of 12 <= 12? // true

// What is the result of 20 >= 5?  // true

// What is the result of 8 == "8"?  // true

// What is the result of 9 === "9"? // false

// What is the result of 10 != "10"? // false

// What is the result of 14 !== "14"? // true

// What is the result of 3 + 7 > 12? // false 

// What is the result of 5 * 2 == "10"? // true

// What is the result of 30 / 3 !== 10? // false

// What is the result of 4 + "4" == 8?  // false

console.log(4+"4");


// 4. logical operator

// AND  (&&)

// true  true true = true
// false true true = false

// OR   (||)

// false false false = false
// true false false  = true

// NOT  (!)

// !(true) = false


// (5 > 2 && 10 < 20)   //  true && true = true

// (8 === 8 || 3 > 9);  //  true ||  false = true

// !(7 <= 7)            //  !(true) = false

// (4 !== "4" && 6 > 1) // true && true = true

// (12 < 5 || 9 >= 9);  // false || true = true

// !(3 > 1 && 10 <= 2)  // !(true && false) = !(false) = true

// (15 == "15" && 2 != 2) // true && false =  false

// (20 > 25 || 5 <= 5);  // false || true = true

// !(9 === "9")           // !(false) = true

// (7 >= 2 && 4 < 4)      // true && false = false

// (2 < 1 || 10 === 10);  // false || true = true

// !(6 !== 6 || 8 < 3);   // !(false || false) = !(false) = true


// 5. ternary operator

// condition ? console.log("true") : console.log("false")

// let pwd = 0

// pwd ? console.log("home page") : console.log("your password is wrong");









// 3. function

// 4. date



