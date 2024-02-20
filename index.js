const express = require('express')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4000

// middleware to parse json request body

app.use(express.json())

// import routes for todo api
const todoRoutes = require('./routes/todos')
//append && mount the todo API route
app.use('/api/v1',todoRoutes)

app.listen(PORT ,()=>{
    console.log(`app is running successfull on ${PORT}`);
})

// connect to the database
const dbConnect = require('./config/database')
dbConnect()

// default Route 
app.get('/',(req,res)=>{
  res.send(`<h1>this is home page </h1>`)
})