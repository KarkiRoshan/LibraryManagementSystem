const mysql = require('mysql')


const connectDB = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database:'librarymanagementsystem'
})

module.exports = connectDB