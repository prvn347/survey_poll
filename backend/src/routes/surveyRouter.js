const express = require('express')
const { createSurvey, getAllSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('../controllers/surveyController')
const {verifyTokenMiddleware} = require('../middleware/middleware')
const app = express()
const cors = require('cors')
app.use(cors())
const surveyRouter = express.Router()
app.use(express.json())



surveyRouter.post('/survey',verifyTokenMiddleware,createSurvey)
surveyRouter.get('/survey',getAllSurveys)
surveyRouter.get('/survey/:id',getSurveyById )
surveyRouter.put('/survey/:id',updateSurvey)
surveyRouter.delete("/survey/:id",deleteSurvey)
module.exports = {
    surveyRouter
}