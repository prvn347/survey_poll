const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const jwt =  require('jsonwebtoken')
const z = require('zod')
const {userSchema,
    SurveyDataSchema} = require('../zod')

const { UserModel } = require('../models/userModel');
const { SECRET_KEY } = require('../config');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())




const createUser = async(req,res)=>{
    try {
        const body = req.body;  
        const parsePayload =   userSchema.safeParse(body)
        console.log(parsePayload)
        if(!parsePayload.success){
           return alert('Please enter valid input.')
        }
        
        const newUser = await UserModel.createUser(body);

        let options = {
            maxAge: 1000 * 60 * 15, 
            httpOnly: true, 
            sameSite: "none", 
            secure: true 
        }
        const token = jwt.sign(newUser.id,SECRET_KEY)
        res.cookie( "token", token, options );
        console.log( "🍪", req.cookies );
        res.status(201).json({newUser,token})

    } catch (error) {
        res.status(400).json({error:"Invalid input"})
        
    }

}
const signInUser = async (req,res)=>{
    try {
    const body = req.body;    
    const parsePayload  = userSchema.safeParse(body)
    if(!parsePayload.success){
    return alert("Invalid input")
     return   res.json({
            error:"invalid input"
        })
    }
    const existedUser = await UserModel.signInUser(body);

    let options = {
        maxAge: 1000 * 60 * 15, 
        httpOnly: true, 
        sameSite: "none", 
        secure: true 
    }
    const token = jwt.sign(existedUser.id,SECRET_KEY)
    res.cookie( "token", token, options );
    console.log( "🍪", req.cookies );
    res.status(201).json({existedUser,token})

} catch (error) {
    res.status(400).json({error:error})
    
}
}
const createVote = async (req,res)=>{
    try {
        const { questionId, optionId } = req.body;
await UserModel.createVote(questionId,optionId)
    res.json({msg:"voted++"})
    } catch (error) {
        console.error("Error recording vote:", error);
        res.status(500).json({ error: "An error occurred while recording the vote." });
        
    }
   
    

}
const findUser = async ( req,res) =>{
    
    try {
        const userId = req.userId;
    const user = await UserModel.findUser(userId)
    res.send(user)
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports ={
    createUser,signInUser,createVote,findUser
}