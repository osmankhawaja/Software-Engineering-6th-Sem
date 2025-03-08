console.log('Hello World');

//variable
// let firstName="Osman", lastName="Khawaja";
// console.log(firstName, lastName);
// // console.log(lastName);

//type conversion
// let x="42";
// console.log(Number(x));
// console.log(String(x));
// console.log(Boolean(0));
// const pi=3.14;
// console.log(pi);

//function
// function add(a, b){
//     return a+b;
// }
// let x=add(21, 9);
// console.log(x);
// const multiply= (a, b) => a * b;
// console.log(multiply(7, 7));

//array
// let x=[1,2,3,4,5];
// console.log(x.map(n => n*2));
// console.log(x.filter(n => n <= 2));
// console.log(x.reduce((sum, n) => sum+n, 0));

//object and destructuring
// let user={name : "Osman", age : 24, country : "Bangladesh"};
// let {name, age}=user;
// console.log(name, age);

//Rest operator
// let arr=[1,2,3];
// let arr2=[4,5,6,...arr];
// console.log(arr2);

//Constructor
function User(name) {
    this.str = name;
    this.x = 100;
  }
  
  let user = new User("Jack");
  
  console.log(user.str); // Jack
  console.log(user.x); // 100