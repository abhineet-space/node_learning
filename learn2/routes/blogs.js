const express = require('express')
const router = express.Router()
//------Multer
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname)
    }
})

var upload = multer({storage:storage})

const auth = require('../controllers/auth')

//_____________________________________________________________________________//

// Single File Upload ----  //
router.post('/upload',upload.single('blogimage'),function(req,res,next){
    var fileinfo = req.file;
    var title = req.body.title;
    console.log("File name is : "+ fileinfo.filename + "Title is : " + title)
    res.send(fileinfo)
})

//_____________________________________________________________________________//

// Multiple File Upload ----  //
router.post('/uploads',upload.array('blogimage',5),function(req,res,next){
    var fileinfo = req.files;
    var title = req.body.title;
    console.log("File name is : "+ fileinfo.filename + "Title is : " + title)
    res.send(fileinfo)
})

router.get('/create', (req,res,next)=>{
    res.render('create',{title:'Create Blog'})
})

router.get('/', auth.create)

module.exports = router