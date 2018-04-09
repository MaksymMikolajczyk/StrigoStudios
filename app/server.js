const express = require('express');
const path = require('path');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/user');
const router = require('./routes/api.js')


const app = express();

var port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));



app.use('/api', router);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname,'client/build/index.html'))
})


app.listen(port, function(){
  console.log('Listening to port: '+port);
})
