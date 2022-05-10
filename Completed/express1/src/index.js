const path = require('path')
const express = require('express')

const app = express()
const port = 3000
// Biultin middle ware

const staticPath = path.join(__dirname,'../public')
// to set the view engine
app.set('view engine','hbs')

//template engine route

app.get('/',(req,res)=>{
    res.render('index')
})

console.log(path.join(__dirname,'../public'))
// app.use(express.static(staticPath))


app.get('/',(req,res)=>{
    res.send("Hello Welcome to home page from express Server")
})

app.listen(port, (err)=>{
    if(err) throw console.log(err)
    console.log(`Server is running on the port ${port}`)
})