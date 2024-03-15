// const sum = function () {
//     let a = 5;
//     console.log(a);
//     return function sum1() {
//         console.log("a:", a);

//     }

// }
// let a = sum();
// a()
// // console.log(a());

// ********* FUNCTION CLOSURE**********
// var sum = function (a) {
//     console.log("Live Viewer " + a);
//     var c = 4;
//     return function (b) {
//         return a + b + c;
//     }

// }
// var store = sum(200); // calling sum and storing value return by func. return by sum(), a,c is not lost  but retained
// console.log(store(2));

// ********* NEW EXAMPLE**********
var sum = function (a, b, c) {

    return {
        sumTwo: function () {
            return a + b;
        },
        sumThree: function () {
            return a + b + c;
        },

    }

}
var store = sum(200, 500, 34); // calling sum and storing value return by func. return by sum(), a,c is not lost  but retained
console.log(store.sumTwo());
console.log(store.sumThree());

// ********* NEW CLOSURE EXAMPLE**********
function useState() {
    let state = 0;
    function setState(newValue) {
        state = newValue;
    }
    function getState() {
        return state;
    }
    return [setState, getState];

}
const [setCount1, getCount1] = useState();
const [setCount2, getCount2] = useState();

setCount1(5);
setCount2(10);


console.log(getCount1(), getCount2()); //5,10