const mysql = require('mysql')

// dotenv.config({path:'./.env'}) // Database Security perpous keeping hostname, password, databaseName in .env?

// dotenv.config({path:'./../process.env'}) // Database Security perpous keeping hostname, password, databaseName in .env?
// const conn = require('../.env)

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test-login'

    // host: process.env.DATABASE_HOST,
    // user: process.env.DATABASE_USER,
    // password: process.env.DATA_PASSWORD,
    // database: process.env.DATABASE
})


conn.connect((err)=>{
    if(err) {
        console.log(err)
    } else{
        console.log("My sql is Connected.")
    }

})

module.exports = conn