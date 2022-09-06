const express = require("express");
const bodyParser = require('body-parser')//a middleware usng for parsing incoming requests. 
const app = express()

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse request data content type application/json
app.use(bodyParser.json());

//import routes
const headphonesRoutes = require('./src/routes/headphones.route');
//create headphones routes
app.use('/api/v1/headphones', headphonesRoutes)
app.listen(8000, ()=>{
    console.log('app is runninng...');
    
})