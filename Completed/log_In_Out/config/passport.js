const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const conn = require('../routes/dbcon')


module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField: 'email'},(email,password,cb)=>{
            // Match User
            conn.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log(result)
                if(result == 0){
                    return cb(null,false,{message:'TEmail is not registered'})
                }
                //Match Password
                bcrypt.compare(password,result[0].password,(error, isMatch)=>{
                    if(error){throw error}
                    if(isMatch){
                        return cb(null,result[0])
                    } else {
                        return cb(null,false,{message:'Incorrect Password'})
                    }
                })
                console.log(result[0])
                passport.serializeUser((result,done)=>{
                    done(null,result.id)
                })
            
                passport.deserializeUser((id,done)=>{
                    result.findById(id,(err,result)=>{
                        done(err,result)
                    })
                })
            })
        })
    )





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
