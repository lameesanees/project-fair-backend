//1. Loads .env file contents into process.env by default.
require('dotenv').config()

//2. import express
const express = require('express')

//3. import cors
const cors = require('cors')

// 7. import DB
const db = require ('./DB/connection')

const router = require('./Routes/router')
// const applicationMiddleware = require('./Middlewares/applicationMiddleware')

//4. create an app using express.js
const pfServer = express()

//5. use
pfServer.use(cors())
pfServer.use(express.json()) //Returns middleware that only parses json
// pfServer.use(applicationMiddleware)

// 9.
pfServer.use(router)

//6. port creation
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log("pfServer listening on port "+PORT);
})
pfServer.get('/',(req,res)=>{
    res.send("Welcome to Project Fair")
})