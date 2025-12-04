

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

console.clear()

// concatination (+)

let str1 = "hello"

let str2 = "world"

let final = str1 +" "+ str2

console.log(final);


// template litral

let str3 = "welcome"
let str4 = "javascript"

let finalVal = `${str3} ${str4}`

console.log(finalVal);

// type conversion

// implicit type conversion

let string = "10"
let number = 10

let total = string+number

console.log(typeof(total));

// string 

// string anything string

console.log(typeof("10"+"10"));
console.log(typeof("10"+10));
console.log(typeof("10"+true));
console.log(typeof("10"+undefined));
console.log(typeof("10"+null));
console.log(typeof("10"+[1,2]));
console.log(typeof("10"+{k:1}));

// number

console.log(typeof(10+"10"));
console.log(typeof(10+10));
console.log(typeof(10+true));
console.log(typeof(10+undefined));
console.log(typeof(10+null));
console.log(typeof(10+[1,2]));
console.log(typeof(10+{q:1}));

// boolean

console.log(typeof(true + "1"));
console.log(typeof(true + 10));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(true + null));
console.log(typeof(true + [1,2]));
console.log(typeof(true + {l:1}));






// explicit type conversion

// Number

console.log(typeof(10+Number("10")));

console.log(Number());
console.log(Number(""));
console.log(Number("12"));
console.log(Number("abc"));
console.log(Number(12));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([1,2,3]));
console.log(Number({k:2}));


// Boolean


console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("12"));
console.log(Boolean("abc"));
console.log(Boolean(12));
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([0]));
console.log(Boolean({l:1}));


console.clear();



// flow control statement


// conditional statement

// if statement

// if(condition){
//  statement
//}

// condtion is true = allow 

if(5=="5"){
    console.log("true val"); 
}

// if else statement

if(5=="5"){
    console.log("true val");
    
}else{
    console.log("false val");
    
}

// else if statement

let hour = 24

if(hour >= 1 && hour <= 6){
    console.log("good morning");
    
}else if(hour >= 7 && hour <= 12){
    console.log("morning");   
}else if(hour >= 13 && hour <= 17){
    console.log("good afternoon");
    
}else{
    console.log("night");
    
}

// nested if statement

let age1 = 151
let height = 155
let weight = 55

if(age1 >= 18){
    if(height >= 155){
        if(weight >= 55){
            console.log("congratulation ur fit!!!");
        }else{
            console.log("your weight is unfit");
            
        }
    }else{
        console.log("your height is unfit");
        
    }

}else{
    console.log("your age is unfit");
    
}


// switch statement

// switch(){
//     case value : statement ; break;
//     case value : statement ; break;
//     case value : statement ; break;
// }

let trafficLight = "red"

switch(trafficLight){

    case "red" : console.log("vechicle stop");break
    case "yellow" : console.log("vechicle start");break
    case "green" : console.log("vechicle go");break
    

}

console.clear();

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);



// looping statement

// for loop

// for(intialiazation;condition ; iteration){
//     // statement
// }

console.log("for loop");


for(let i = 1 ; i<=5 ; i++){
console.log(i); // 1 2 3 4 5

}

// let i=1 ; 1<=5 = true ; 1++ = 2

// let i=2 ; 2<=5 = true ; 2++ = 3

// let i=3 ; 3<=5 = true ; 3++ = 4

// let i=4 ; 4<=5 = true ; 4++ = 5

// let i=5 ; 5<=5 = true ; 5++ = 6

// let i=6 ; 6<=5 = false.

console.log("even val");


for(let i=1 ; i<=10 ; i++){
    if(i%2==0){
        console.log(i);
        
    }
}


console.log("while loop");


// while loop

// intialiazation
// while(condition){
// // statement
// // iteration
// }

let val = 5

while(val >= 10){

    console.log(val);

    val--
    
    
}

// 5 ; 5>= 0 = true ; 5 ; 5-- = 4

// 4 ; 4>=0 = true ; 4 ; 4-- = 3

// 3 ; 3>=0 = true ; 3 ; 3-- = 2

// 2 ; 2>=0 = true ; 2 ; 2-- = 1

// 1 ; 1>=0 = true ; 1 ; 1-- = 0

// 0 ; 0>=0 = true ; 0 ; 0-- = -1

// -1 ; -1 >= 0 = false 




// do while loop

// intialiazation

// do{
//     // statement 

//     // iteration
// }
// while(condition)

let val1 = 10

do{
    console.log(val1);

    val1--
    
}

while(val1 >= 0)


// for of loop

// string , array , function

let str = "javascript"

for(let a of str){
    console.log(a);   
}

let fruit1 = ["apple","orange","banana","graph"]

for(let b of fruit1){
    console.log(b);
    
}

// for in loop

// object

let obj1 = {
    bigFruit : "water melon",
    smallFruit : "cherry",
    middleFruit : "apple"
}


for(let c in obj1){
 console.log(obj1[c]);
 
}

console.clear();


// 3. function

function one1(parameter){
    // statement
    console.log("hello");
    console.log(parameter);
    
    
}

one1("navi")


function two1(){
    console.log("batch22"); 
    for(let a = 0 ; a<=6 ; a++){
        console.log(a);
        
    }

    if(5){
        console.log("5");
        
    }

}

two1()


function clgForm(a,b){
    console.log("name :", a);
    console.log("department :", b);
    
}

clgForm("kamal","ece")
clgForm("livin","ece")
clgForm("praveen","ece")


let employee = {
    name1 : "john",
    role : "developer"
}


function contact(){
    console.log(employee.name1);
    
}

contact()

console.clear();

// function types

// named function

function named(parameter){
    console.log("named function");
    
}

named("argument")

// Annonymous function

let Annonymous = function(parameter){
    console.log("Annonymous function");
    
}

Annonymous("Argument")

// Arrow Function

let Arrow = (parameter)=>{
    console.log("Arrow function");
    
}

Arrow("Argument")


// example only

let h1 = document.querySelector("h1")
let button = document.querySelector("button")

function three1(){
    h1.innerText = "welcome"
}




// 4. date



