const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const conn = require('./routes/dbcon')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

const app = express()
const port = 3000
// Passport Config
require('./config/passport')(passport)


//EJS
app.use(expressLayouts)
app.set('view engine','ejs')

//Body Parser
app.use(express.urlencoded({extended: false}))


//Express Session Middleware

app.use(session({
    secret: 'secure',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//connect flash middleware 
app.use(flash());

// Global vars
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next()
})

//Routes
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))

                
app.listen(port,(err)=>{
    if(err) throw console.log(err)
    console.log(`Server listining on port ${port}`)
})