const express = require('express')
const { createUser, signInUser, createVote } = require('../controllers/userController')
const app = express()
const userRouter = express.Router()
app.use(express.json())
const cors = require('cors')
app.use(cors())

userRouter.post('/user/signup',createUser)
userRouter.post('/user/signin',signInUser)
userRouter.post('/vote',createVote)

module.exports ={
    userRouter
}