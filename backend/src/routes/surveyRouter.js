const express = require('express')
const { createSurvey, getAllSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('../controllers/surveyController')
const {verifyTokenMiddleware} = require('../middleware/middleware')
const app = express()
const cors = require('cors')
app.use(cors())
const surveyRouter = express.Router()
app.use(express.json())



surveyRouter.post('/survey',verifyTokenMiddleware,createSurvey)
surveyRouter.get('/survey',verifyTokenMiddleware,getAllSurveys)
surveyRouter.get('/survey/:id',verifyTokenMiddleware,getSurveyById )
surveyRouter.put('/survey/:id',verifyTokenMiddleware,updateSurvey)
surveyRouter.delete("/survey/:id",verifyTokenMiddleware,deleteSurvey)
module.exports = {
    surveyRouter
}