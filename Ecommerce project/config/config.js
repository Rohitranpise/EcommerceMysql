const mysql = require('mysql')

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rohit@2759",
    database: "ecommerce",
    connectionLimit: 10
});

module.exports = dbConn;

// pool.query(`select * from headphones`, (err, result, fields)=>{
//     if(err){
//         return console.log(err);
//     } return console.log(result);
// })
