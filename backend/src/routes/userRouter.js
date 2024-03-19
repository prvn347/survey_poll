const express = require('express')
const { createUser, signInUser, createVote, findUser } = require('../controllers/userController')
const app = express()
const userRouter = express.Router()
app.use(express.json())
const cors = require('cors')
const { verifyTokenMiddleware } = require('../middleware/middleware')
app.use(cors())

userRouter.post('/user/signup',createUser)
userRouter.post('/user/signin',signInUser)
userRouter.post('/vote',createVote)
userRouter.get('/me',verifyTokenMiddleware,findUser)
module.exports ={
    userRouter
}