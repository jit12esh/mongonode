//app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');

//initialize our express app

const app = express();

//Set up mongoose connection 
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://spidy:jitesh121@ds251210.mlab.com:51210/spider';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port,()=>{
    console.log('Server is up and running om port Number ' +port);
})