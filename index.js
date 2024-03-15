// let object = {
//     name:"Eshant mishra",
//     age:24,
// address:{
//     city:"khandwa",
//     state:"M.P."
// }
// }

// let obj1 = {...object,name:"prashant",age:21,address:{...object.address,city:"indore"}}
// // let obj1 = object;
// // obj1.age=21;
// // obj1.address.state="U.P";

// console.log(obj1);
// console.log(object);

// myFunction(); // Hello, World!

// function myFunction() {
//   console.log('Hello, World!');
// }

// x=5

// console.log(x); // undefined
// let x;

// myFunction(); // TypeError: myFunction is not a function

// var myFunction = function() {
//   console.log('Hello, World!');
// };

console.log(10 * "a");

// var sortedSquares = function(nums) {
//    let squareNums=  nums.map((item)=>{
//        return (item =item*item)
//     });
//      return squareNums.sort(function(a,b)
//       {
//         return a-b;
//       })
//   };

// console.log(sortedSquares([2,5,6,-8,0]));


// function sum(a, b, callBack) {
//     const addition = a + b; // Declare addition as a local variable
//   return  callBack(addition);
// }

// function total(sum) {
//     console.log(sum);
// }

// sum(3, 5, total);

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let fn = outer()
fn();
fn();

let [skill_1 = "C#", skill_2, skill_3] = ["Java", "React"];
console.log(skill_1, skill_2, skill_3);