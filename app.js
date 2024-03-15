//Synchronous
// console.log("One");
// console.log("Two");
// console.log("Three");

//Asynchronous
// console.log("This is Asynchronous");
// console.log("One");
// setTimeout(()=>console.log("Two"),200)
// console.log("Three");


//Callback  
function sum(a,b){
    console.log(a+b); 
}

function calculate(a,b,sumCallback){
    sumCallback(a,b);
}
//this is one way
calculate(3,4,sum);

// another way directly pass function
calculate(5,8,(a,b)=>{console.log(a+b)}
)


//Callback in SetTimeout
function greet(){
    console.log("Hello Callback");
}
setTimeout(greet,1000)
