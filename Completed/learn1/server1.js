const http = require('http');

function mul(a){
    return a*10;
}

const test = (a)=>a*100



function dataControl(req,res){
    res.write("<h1>Hello, I am Abhineet<\h1>");
    res.end();
}

const dataControl1 = (req,res) =>{
    res.write("Hello Abhineet!!!");
    res.end();
}

http.createServer(dataControl1).listen(4000);
// http.createServer((req,res)=>{
//     res.write("<h1>Hello, I am Abhineet<\h1>");
//     res.end();


// }).listen(4500);

