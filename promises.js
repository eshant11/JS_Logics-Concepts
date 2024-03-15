// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Success")
//         reject("Some Error")
//     })
// }

// let promise= getPromise().then((res)=>{
//     console.log("fulfilled",res);
// }).catch((error) => {
//     console.log("rejected", error);
// })

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject("error")
        }, 3000)
    })
}

//Promise chain 
getData(1).then((res) => {
    return getData(2)
}).then((res) => {
    return getData(3)
}).then((res) => {
    console.log("response:", res);

})