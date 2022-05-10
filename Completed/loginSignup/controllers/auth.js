const conn = require('../routes/dbcon')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')


exports.register = (req,res)=>{
    console.log(req.body)

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;

    const { name, email, password, passwordConfirm } = req.body;

    conn.query('SELECT email FROM users WHERE email = ?', [email], async (err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)

        if (result.length>0){
            return res.render('register',{
                message: 'E-Mail is already taken'
            })
        } else if(password !== passwordConfirm){
            return res.render('register',{
                message: 'Password Mis-Match'
            })
        }else{
            bcrypt.hash(password, 10, function(err, hash) {
                // Store hash in your password DB.
                if(err) throw err
                console.log("Hashed password is: "+hash)
                conn.query('INSERT INTO users SET ?',{name: name, email: email, password: hash}, (err,results)=>{
                    if(err) throw err
                    // console.log(results)
                    res.render('register',{
                        message: name + " Registered"
                    })
                })
            });
        }
    
    })

    // res.send('Form Submitted')
}

exports.login = (req,res)=>{
    const { email,password  } = req.body
    console.log(password)

    conn.query("SELECT name, email, password  FROM users where email = '"+email+"'", (err,result)=>{
        if (err) throw err
        console.log(result)

        if(result.length === 0){
            return res.render('login',{
                message:'User is not registered'
            })
        }

        bcrypt.compare(password, result[0].password, function(err, comResult) {
            if (err) throw err
            console.log(comResult)
            if (comResult){
                return res.render('logSuc',{
                    message: result[0].name + ' logged in'
                })

            }else{
                return res.render('login',{
                    message: 'Incorrect Password'
                })
            }
        });
    })

}
