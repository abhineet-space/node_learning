const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const port = 3000


//biult in middleware----- to use html
// const staticPath = path.join(__dirname,'../public')

// app.use(express.static(staticPath))

//Set view Engine----to use hbs template file
            //path rename from views to template
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
// console.group(path.join(__dirname,"../templates"))

app.set('view engine', 'hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)


//---change the directiory name

app.get('/',(req,res)=>{
    res.render('index',{
        name : "Abhineet"
    })
})
    //about-us page....
app.get('/about',(req,res)=>{
    res.render("about",{
        name : 'Abhineet'
    })
})
//--------------------//




//--------------------//
    //___Default page...
app.get('/',(req,res)=>{
    res.send('hello from express Ser')
})



app.listen(port,(err)=>{
    if(err) throw console.log(err)
    console.log(`Server is running on port ${port}`)
})