// 1. import express
const express = require('express')

const userController = require('../Controllers/userController')
const projectController = require("../Controllers/projectController")
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

// 2. create router object of express to define path
const router = express.Router()

// 3. register api call
router.post('/register',userController.register)

// 4. login api call
router.post("/login",userController.login)

// 5. add project api call
router.post("/project/add-project",jwtMiddleware, projectController.addProject)

module.exports=router