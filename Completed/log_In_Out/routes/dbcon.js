const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test-login'
})

conn.connect((err)=>{
    if(err) {
        console.log(err)
    } else{
        console.log("My sql is Connected.")
    }

})

module.exports = conn