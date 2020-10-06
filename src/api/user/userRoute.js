const express = require("express");
const router = express.Router();
//const userModel = require("../models/userModel");
const userController = require('./userController');
router.post('/signInUser', userController.signIn)
module.exports = router;