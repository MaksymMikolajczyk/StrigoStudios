const express = require('express');
const path = require('path');
//Setup express app
const app = express();

//Set app port
//Get port from Heroku vars
var port = process.env.PORT || 8080;

//Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

//Api


//Catchall for requests not matching
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname,'client/build/index.html'))
})

//Listen for requests
app.listen(port, function(){
  console.log('Listening to port: '+port);
})
