

let promise = new Promise(function(resolve, reject){
    setTimeout(()=> resolve("Run Before"),1000)
});

promise.then(
    result=>{
        console.log(result)
        GetAfetr()
    },
    error => console.log(error)
)

function GetAfetr(){
    console.log("print After")
}

