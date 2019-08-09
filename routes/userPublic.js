const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const UserPublic = require("../models/UserPublic");

router.post("/", (req, res) => {
  console.log(res.body);
  var user = UserPublic({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    cellphone: req.body.cellphone,
    address:{
      street: req.body.street
    }
  });

  user.save(function(err, data) {
    if (err) console.log("error");
    else console.log("ok");
  });
});

router.post("/", (req, res) => {
  console.log(res.body);
  var user = UserPublic({
    age: req.body.name,
    gender: req.body.lastName,
    maritalStatus: req.body.email,
    occupation: req.body.password,
    curp: req.body.cellphone,
  });

  user.save(function(err, data) {
    if (err) console.log("error");
    else console.log("ok");
  });
});

module.exports = router;