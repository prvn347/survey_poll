const express = require('express')
const { createUser } = require('../controllers/userController')
const app = express()
const userRouter = express.Router()
app.use(express.json())
const cors = require('cors')
app.use(cors())

userRouter.post('/user',createUser)

module.exports ={
    userRouter
}