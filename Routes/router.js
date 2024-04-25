// 1. import express
const express = require('express')

const userController = require('../Controllers/userController')
const projectController = require("../Controllers/projectController")
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

// 2. create router object of express to define path
const router = express.Router()

// 3. register api call
router.post('/register',userController.register)

// 4. login api call
router.post("/login",userController.login)

// 5. add project api call
router.post("/project/add-project",jwtMiddleware,multerConfig.single('projectImage'), projectController.addProject)

// 6. get project
router.get('/project/get-auser-project',jwtMiddleware,projectController.getAprojects)

// 7. get 3 project details in home
router.get('/projects/home-project',projectController.getHomeProject)

// 8. get all project
router.get('/projects/get-all-project', jwtMiddleware, projectController.getAllProjects);




module.exports=router