const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const User = require("../models/User");

router.get("/", (req, res) => {
  User.find(function(err, dato) {
    res.send(dato);
  });
});

router.get('/:userName', (req, res, next) => {
  
  User.findOne({
    'user': req.params.userName
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
});

router.post("/", (req, res) => {
  console.log(res.body);
  var user = User({
    user: req.body.username,
    password: req.body.password
  });

  user.save(function(err, data) {
    if (err) console.log("error");
    else console.log("ok");
  });
});

router.get('/user/users', (req,res) => {
  User.find()
  .then(data => res.status(200).json(data))
  .catch(err => console.log(err));
})




module.exports = router;
