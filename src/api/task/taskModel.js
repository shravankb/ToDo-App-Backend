const mongoose = require("mongoose");
const user = require('../user/userModel');
const ObjectId = mongoose.Schema.Types.ObjectId

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    unique: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isArchived: {
    type: Boolean,
  },
  createdBy: {
    type: ObjectId,
    required: true,
    ref :user
  },
},
{
   timestamps:true
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
