require("dotenv").config();

const mysql = require("mysql2")
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})


db.connect((err) => {
    if(err){
        console.log("err in db", err)
    } else {
        console.log("db connected")
    }
})

module.exports = db;