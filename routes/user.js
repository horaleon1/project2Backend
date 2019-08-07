const express = require('express')
const router = express.Router();

const User = require('../models/User')

router.get('/', (req,res) => {
  User.find()
});

module.exports = router;

