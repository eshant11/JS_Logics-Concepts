function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            console.log("fetching data .....");

            getNextData();
        }
    }, 2000)
}
// this is not the right way, it will discard the use of callback
// getData(1,getData(2))

//Right way to pass the the callback
// Always pass the callback
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
})

