const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')

// Load config by calling dotenv and creating an object with the path
require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Session Middleware - must go above passport middleware 
app.use(
  session({
    secret: 'keyboard cat',
    resave: false, // won't save the session if nothing was changed. 
    saveUninitialized: false, //we won't create a session unless something is stored. 
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes) //Things that need a route will go to the /main file to find the correct route
app.use('/todos', todoRoutes)

// Port
app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!')
})