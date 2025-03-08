//Declaring Variables
// let str="osman"; 
// const pi=3.1416;
// var x=10;

//Defining different data types
// let y="Alice";//string
// let n=10;//Number
// let bool=true;//boolean
// let obj={name:"bob", age:24};//object
// let arr=[1,2,3,4,5];//array
// let {name, age}=obj;

// Type conversion
// let strNumber = "123";
// let intNumber = parseInt(strNumber);
// let floatNumber = parseFloat("123.45");
// let numToStr = String(123);

// console.log(floatNumber);
// console.log(numToStr);

// // Arithmetic, logical, and comparison operators
// let sum = 5 + 5;//arithmatic
// let isGreater = 10 > 5;//comparison
// let logicalAnd = true && false;//logical
// console.log(sum, isGreater, logicalAnd);

//function 
// function sum(a, b)
// {
//     return a+b;
// }
// console.log(sum(5, 15));

// //arrow function
// const f = (a, b) => a+b;
// console.log(f(10, 20));

//Conditional
// function checkEvenOdd(num) {
//     if (num % 2 == 0) {
//         console.log(`${num} is even.`);
//     } else {
//         console.log(`${num} is odd.`);
//     }
// }
// checkEvenOdd(7); // Output: 7 is odd.
// checkEvenOdd(10); // Output: 10 is even.

// // Printing numbers from 1 to 10 using a for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Defining a class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object and calling greet method
const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
