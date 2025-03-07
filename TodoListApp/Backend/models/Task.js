const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    completed: { 
        type: Boolean,
        default: false },
    createdAt: {
         type: Date,
        default: Date.now },
    updatedAt: { 
        type: Date,
        default: Date.now },
  },
});
const Task = mongoose.model('task', TaskSchema); 
module.exports = Task;