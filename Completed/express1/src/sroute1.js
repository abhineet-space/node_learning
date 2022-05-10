const express = require('express')
const app = express()

const port = 3000
// app.get(route,callback) 


app.get('/',(req,res)=>{
    res.send("Hello human, Welcome to homepage")
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about page")
})

app.get('/contact',(req,res)=>{
    res.status(200).send("Hello human, Welcome to Contact page")
})

app.listen(port, (err)=>{
    console.log(`Listening the port on server ${port}`)
    if(err) throw console.log(err)
})