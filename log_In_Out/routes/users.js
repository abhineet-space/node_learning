const express = require('express')
const conn = require('./dbcon')
const bcrypt = require('bcrypt')
const router = express.Router()
const passport = require('passport')

// Login Page
router.get('/login', (req, res) => {
    res.render('login')
})

// Register Page
router.get('/register', (req, res) => {
    res.render("register")
})

// Register Handle

router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body
    let errors = []

    //Check required field
    if (!name || !email || !password || !password2) {
        errors.push({ message: "Kindly fill all the values" })
    }
    // Check password
    if (password != password2) {
        errors.push({ message: "Password does not match" })
    }
    // Checked password length
    if (password.length < 4) {
        errors.push({ message: "Password should be at least 6 characters" })
    }
    console.log(errors)
    //
    if (errors.length > 0) {
        res.render('register', {
            errors
        })
    } else {
        //validation passed
        conn.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) {
                console.log(err)
            }
            // console.log(result)

            if (result.length > 0) {
                errors.push({ message: "Email already taken" })
                res.render('register', {
                    errors
                })
            }else {
                bcrypt.hash(password, 10, function (err, hash) {
                    if (err) throw err
                    console.log("Hashed password is: " + hash)
                    conn.query('INSERT INTO users SET ?', { name: name, email: email, password: hash }, (err, results) => {
                        if (err) throw err
                        console.log(results)
                        errors.push({ message: name +" Successfully registered" })
                        req.flash('success_msg','You are now registered, You can login now')
                        res.redirect('login')
                    })
                });
            }

        })

        // res.send('Form Submitted')


    }
})


//Login handle
router.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req,res,next)
})


module.exports = router