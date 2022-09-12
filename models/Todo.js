const mongoose = require('mongoose')
// tells the database how to store the data
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
   creator: {
    type: String,
    required: true
  },
  assignee: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
