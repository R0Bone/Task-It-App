const Todo = require('../models/Todo')
const User = require('../models/User')
// const loggedUser = req.user.userName


module.exports = {
  getTodos: async (req, res) => {
    console.log(req.user)
    try {
      const todoItems = await Todo.find()
      const itemsLeft = await Todo.countDocuments({ userId: req.user.id, completed: false })
      const groupCompleted = await Todo.countDocuments({ completed: true })
      const groupUncompleted = await Todo.countDocuments({ completed: false })
      const  groupDecimal = ((groupCompleted/groupUncompleted)*100)
      const groupPercentage = `${parseFloat(groupDecimal).toFixed(0)}%`
      console.log(groupPercentage)
      res.render('todos.ejs', { todos: todoItems, left: itemsLeft, groupleft: groupPercentage, user: req.user, creator: req.creator, assignee: req.assignee, project: req.project })
    } catch (err) {
      console.log(err)
    }
  },
  createTodo: async (req, res) => {
    try {
      console.log(req.body)
      await Todo.create({ todo: req.body.todoItem, completed: false, userId: req.user.id, creator: req.user.userName, assignee: req.body.todoAssignee, project: req.body.todoProject })
      console.log('Todo has been added!')
      res.redirect('/todos')
    } catch (err) {
      console.log(err)
    }
  },
  markComplete: async (req, res) => {
    try {
      const todoItem = await Todo.find({ _id: req.body.todoIdFromJSFile })
      console.log(todoItem[0])
      console.log(User.username, todoItem[0].creator, todoItem[0].assignee)
      // console.log(loggedUser, req.user.userName)
      //we need a way to the the currently logged in user
      if (req.body.username === todoItem[0].creator || req.body.username === todoItem[0].assignee) {
        try {
          await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
            completed: true
          })
          console.log('Marked Complete')
          res.json('Marked Complete')

        } catch (err) {
          console.log(err)
        }
      }
    } catch (err) {
      console.log(err)
    }
  },
  markIncomplete: async (req, res) => {
    try {
      const todoItem = await Todo.find({ _id: req.body.todoIdFromJSFile })
      if (req.body.username === todoItem[0].creator || req.body.username === todoItem[0].assignee) {
        try {
          await Todo.findOneAndUpdate({ _id: req.body.todoIdFromJSFile }, {
            completed: false
          })
          console.log('Marked Incomplete')
          res.json('Marked Incomplete')
        } catch (err) {
          console.log(err) 
        }
      }
    }
    catch (err) {
      console.log(err)
    }
},
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile)
    try {
      //console.log({ _id: req.body.todoIdFromJSFile })
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
      console.log('Deleted Todo')
      res.json('Deleted It')
    } catch (err) {
      console.log(err)
    }
  }
}