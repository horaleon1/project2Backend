const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const UserAmbulance = require("../models/UserAmbulance");

router.post("/", (req, res) => {
  console.log(res.body);
  var userAmbulance = UserAmbulance({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    cellphone: req.body.cellphone,
  });

  userAmbulance.save(function(err, data) {
    if (err) console.log("error");
    else console.log("ok");
  });
});

module.exports = router;