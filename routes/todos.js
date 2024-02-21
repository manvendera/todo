const express = require('express')
const router = express.Router();

// import controller
const { updateTodo } = require('../controllers/updateTodo')
const { getTodobyId } = require('../controllers/getTodobyId')
const { getTodo } = require("../controllers/getTodo")
const { createTodo } = require("../controllers/createTodo");
const { deleteTodo } = require('../controllers/deleteTodo');

// const dbConnect = require('../config/database');

// define Api routes
router.post("/createTodo", createTodo)
router.get('/getTodo', getTodo)
router.get('/getTodobyId/:id', getTodobyId)
router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)


module.exports = router;