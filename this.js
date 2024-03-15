const { func } = require("prop-types");

// method is a Function which is in the object,
const video = {
    title: "a",
    play() {
        console.log(this);
    }
}
video.play()
//creating new method for video object
video.stop = function () {
    console.log(this);

}
video.stop()

//function --> global  (Window,global)
// now ""this"" in this function refers to a global window object
// This is also called constructor FUNCTION
function playVideo(name) {
    this.name = name
    console.log(this);
}
playVideo("jfgjsd"); // this refers to a global object --> Window {window: Window, self: Window, document: document, name: 'jfgjsd', location: Location, …}

//BUT when you call a function using ""NEW"" operator this will reference a new empty {}object
const v1 = new playVideo("eshant");  // playVideo { name: 'eshant' }



// ***********Another example************
/*In this example, this inside the forEach callback refers to the videoA object because we explicitly passed this as the second argument to the forEach method. As a result, this.title correctly refers to the title property of the videoA object.*/
const videoG = {
    title: "a",
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        })
    }
}
videoG.showTags()  //undefined 'a'
// this.js:36 undefined 'b'
// this.js:36 undefined 'c'  shows undefined bcz this inside fucntion refers to that function not the show tags thats y we cant use title

// ******Now to use this title ******
const videoA = {
    title: "a",
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this) //now ""this"" refers to the title of the videoA obj
    }
}
videoA.showTags(); // a a
// this.js:50 a b
// this.js:50 a c


//CALL, BIND, APPLY

// **********CALL()***********

let obj1 = {
    name: "Eshant",
    age: 26,
    greet: function () {
        console.log(this);
    }
}
obj1.greet(); //here this refers to obj1 OBJECT

//BUt now i want that i want to use this greet method within obj2 without defining it in obj2
let obj2 = {
    name: "Mishra",
    age: 28,
}
//  Now here CALL function come into picture
obj1.greet.call(obj2); // Now this from greet refer to the obj2

// 2. case---> if function is outside the object
let greet2 = function (city, state,) {
    console.log(this.name, city, state);
}
// this is called  FUNCTION BORROWING
greet2.call(obj2, "khandwa") // now this.name will give u a name from obj2
greet2.call(obj1, "indore") // now this.name will give u a name from obj1

// ********APPLY()*************
greet2.apply(obj2, ["eshant", "mishra"], "Apply")

//********BIND()**********
let newGreet = greet2.bind(obj2, "delhi", "pune")
newGreet()