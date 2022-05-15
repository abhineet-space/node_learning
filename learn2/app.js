const express = require('express')
const blogs = require("./routes/blogs")
const hbs = require('ejs')
const app = express()
const port = 3000


app.use(express.json())

app.set('view engine','ejs');


app.use('/', blogs)

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,(err)=>{
    if(err) throw console.log(err)
    console.log(`Server listining on port ${port}`)
})


