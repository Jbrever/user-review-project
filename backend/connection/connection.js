const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'userReview',
    password:'1234'
})

module.exports = {connection};