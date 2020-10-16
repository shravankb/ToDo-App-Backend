const express = require("express");
const router = express.Router();
//const userModel = require("../models/userModel");
const taskController = require('./taskController');
router.post('/addTask', taskController.addTask)
router.get('/getTask/:userId', taskController.getTasks)
module.exports = router;