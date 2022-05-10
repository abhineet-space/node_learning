// const express = require('express')

// const http = require('http')



// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write("<h1>Welocme Abhineet!!!</h1>")
//     res.end()
// }).listen(3000)


const fs = require('fs')

// fs.readFile('calc.js','UTF-8',function(err, data){
//     console.log(data)

// })

// fs.writeFile('app1.js','console.log("done")',function(err){
//     console.log("Data Saved")
// })

// fs.appendFile('app1.js','console.log("done")',function(err){
//     console.log("Data Saved")
// })

fs.unlink('app1.js',function(err){
    console.log('Deleted')
})