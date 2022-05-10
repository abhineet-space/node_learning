const express = require('express')

const app = express()

app.get('/', (req,res) => {
    // console.log('Hello World')
    res.send(200,"Hello Abhineet")
})

app.get('/abhi',(req,res)=>{
    res.send("Welcome to Abhineet Page...")
})


app.get('/abhi',(req,res)=>{
    const id = req.params.id
    res.send("Hey Abhineet"+ id )
})

app.get('/', (req,res) => {
    
})

app.listen(3000, (req,res)=>{
    console.log('Server is running...')
})



// express().listen(3000)