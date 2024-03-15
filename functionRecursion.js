const { number } = require("prop-types");

// *********FUNCTION RECURSION**********
let counter = 1
function demo(number) {
    if (counter > number) {
        return;
    }
    console.log("Like this video" + counter);
    counter++;
    demo(number); //recursion function
}
demo(10);



let str1 = "Eshant";

let revsString = "";
function recurStr(str) {
    if (str.length > 0) {// Condition for recurrsion
        revsString += str.substr(-1);
        recurStr(str.substring(0, str.length - 1)); //recurssion
        return revsString;
    }
}
console.log(recurStr(str1));