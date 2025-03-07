const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    maxLength: 50
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // reference to the User model by its id
  }
}, {timestamps: true});
const Task = mongoose.model('task', TaskSchema); 
module.exports = Task;