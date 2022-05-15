const express = require('express')
// const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path')
const conn = require('./routes/dbcon')


// dotenv.config({path:'./.env'}) // Database Security perpous keeping hostname, password, databaseName in .env?

const app = express()

// const db = mysql.createConnection({
//     //---- Type 1
//     // host: 'localhost',
//     // user: 'root',
//     // password: '',
//     // database: 'test-login'
//     //---- Type 2...Database Security perpous keeping hostname, password, databaseName in .env
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATA_PASSWORD,
//     database: process.env.DATABASE
// })

    
const publicDirectory = path.join(__dirname,'./public')
app.use(express.static(publicDirectory))


//  ------- Parse URL-encoded bodies (as sent by the html)
app.use(express.urlencoded({extended:false}))

// ------------- Paese JSON bodies (as sent by API clients.)
app.use(express.json())

app.set('view engine','hbs');


// app.set('views', './views');



// db.connect((err)=>{
//     if(err) {
//         console.log(err)
//     } else{
//         console.log("My sql is Connected.")
//     }

// })
const port = 5000


// Define routes
app.use('/',require('./routes/pages'))
app.use('/auth',require('./routes/auth'))

//-------Commented as routed------//
// // Home Page
// app.get('/',(req, res)=>{
//     // res.send("<h1>Welcome to Home page...</h1>")
//     res.render('home')
// })
// // Register Page
// app.get('/register',(req, res)=>{
//     // res.send("<h1>Welcome to Register Page...</h1>")
//     res.render('register')
// })
// // Login Page
// app.get('/login',(req, res)=>{
//     // res.send("<h1>Welcome to Log in page...</h1>")
//     res.render('login')
// })

// App running port config
app.listen(port,(err)=>{
    if(err) throw console.log(err)
    console.log(`Server listining on port ${port}`)
})