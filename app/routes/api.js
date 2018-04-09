const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const User = require('../models/user');


router.post('/register', function(req, res){
  User.findOne({
    login: req.body.login
  }, function(err, user) {

    if (err) throw err;
    if(user){
      res.json({ success: false, message: 'Registration failed. User already exists.' });
    }else if(!user){
      var user = new User({
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        admin: false
      });

      // save the sample user
      user.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
      });
    }
  })
  })


router.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    login: req.body.login
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      user.isValidPassword(req.body.password).then(isValid=>{
        if (!isValid) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

      const payload = {
        login: user.login,
        admin: user.admin
      };
          var token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: 60 * 60 * 24 //24 h
          });


          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      })


    }

  });
});



router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});



module.exports = router;
