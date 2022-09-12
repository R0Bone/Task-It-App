# Task It - the

![gif of app in action](https://replit.com/@AaronClamp/todo-mvc-auth-local#grouptodo.gif) (change file name)

# Introduction

This [insert title] app is built using the MVC Architecture. We have also implemented "authorization" so folxs can sign up and log into the app. 

Users can log task items as well as assign tasks to other users. Additionally, tasks can be organized by project. 

# How It's Made:
**Tech used:** HTML, CSS, JavaScript, EJS, Node.js, MongoDB, and Mongoose.

This app utilizes a secure Mongo.DB database to hold user info as well as action items or task.

The logic is written in JavaScript and thanks to Node.js the backend code documents are also written with JS.

Make sure to use all the dependecies below to ensure proper functionality and security.


# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---

 
# Lessons Learned

This app challenged us to keep our code as dry as possible, while adding complex functionality. 

We successfully created organized data schemas that enabled us to assign permissions to separate users based on unique IDs. 

This model format was repeated and utilized for the organization of task items as well. The unique ID's were key itentifiers to seamlessly tie the functional logic together. 

The straight forward database schemas established a core for the complex functionality desired. And such, the code necessary for the controller logic was able to be much "dryer" than that of a multifaceted database that creates endles parent and child nodes on every request. 

Overall, this allowed for much less computational complexity and a nimble app that was live in less than a few days time from concept to launch.

Additionally, the added user authentication and password encryptions ensured all sensative data was abstracted in a safe and secure way.

Should you have any suggestions or make any optimizations, we would love to hear from you!

We hope you enjoy our app. :)


# Future optimizations

1) Add logic to percentage of tasks complete calculation to ensure the rendered value does not exceed 100% or fall under 0%.
2) Add a status bar or visual representation of project percent completeness.
3) Filter function to search "tasks" and "projects"
4) Create user roles and groups, that give users specific functionality, and limit access to other groups' projects.
5) Create a separate "projects" page, where the status of all projects can be seen.
6) Allow users to be assigned to specific projects and to roles within that project.
7) Add a password reset function.
8) Update the css to add a mobile view.
9) Ensure the fonts, color-schemes, alt-text and functionality are accessible.
10) Streamline the fonts and css styling accross all pages.
11) Add start and target deadline dates for each project and task.
12) Add a Gantt chart view or a similar view that gives users a visual representation of the sequencing of tasks within a project.
   

# Contributors

Robert Arroyo [@R0Bone](https://github.com/R0Bone)
Breanna Bang [@breabang](https://github.com/breabang)
JP Canindo [@Illuztrado](https://github.com/Illuztrado)
Aaron Clamp [@ronaldconn](https://github.com/ronaldconn)
Terrashawn Starks [@...](https://github.com/...)
Jacob Willkomm [@JacobWillkomm](https://github.com/JacobWillkomm)



