const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const { SurveyModel } = require('../models/surveyModel');
const e = require('express');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const createSurvey = async (req, res) => {
 
    try {
    const surveyData = req.body;
    const userId = req.userId;
        console.log(userId)
        console.log(typeof(userId))
    const newSurvey = await SurveyModel.createSurvey(surveyData,userId);
    res.status(201).json(newSurvey);
    } catch (error) {
        res.json({error:error})
        
    }
    
}

const getAllSurveys = async (req,res)=>{
    try {
        const sruveys = await SurveyModel.getAllSurveys()
        res.status(201).json(sruveys);

        
    } catch (error) {
        res.json({error:error})
        
    }
}
const getSurveyById = async (req,res)=>{
    try {
        const { id } = req.params;
        const survey = await SurveyModel.getSurveyById(id);
        if (!survey) {
            res.status(404).json({ message: 'Survey not found' });
            return;
        }
        res.status(200).json(survey);
        
    } catch (error) {
        res.status(400).json({error:error})
        
    }
}
const updateSurvey = async (req,res)=>{
    try {
        
        const { id } = req.params;
        const updateBody = req.body;
        const updatedSurvey = await SurveyModel.updateSurvey(id,updateBody)
        res.status(200).json({ success: true, payload: updatedSurvey });
    } catch (error) {
        res.status(400).json({error:error})
    }
}
const deleteSurvey = async (req, res) => {
    try {
        const { id } = req.params;
        await SurveyModel.deleteOption(id)
        await SurveyModel.deleteQuestion(id)
        await SurveyModel.deleteSurvey(id);

        res.status(200).json({ msg: 'Survey deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports= {
     createSurvey,
     getAllSurveys,
     getSurveyById,
     updateSurvey,
     deleteSurvey
}