const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.write("<h1>Welcome to home page</h1>")
    // res.end()
    res.send()
    // res.send("<h1>Welcome to home page</h1>")
})

app.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page")
})

app.get('/temp',(req,res) => {
    res.json({
        id: 1,
        name: "Abineet",
    })
})

app.listen(port,(err)=>{
    if(err) throw console.log(err)
    console.log(`Server is running on the port number ${port}`)
})