const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const jwt =  require('jsonwebtoken')

const { UserModel } = require('../models/userModel');
const { SECRET_KEY } = require('../config');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())




const createUser = async(req,res)=>{
    try {
        const body = req.body;
        const newUser = await UserModel.createUser(body);
        
    
        let options = {
            maxAge: 1000 * 60 * 1, 
            httpOnly: true, 
            sameSite: "none", 
            secure: true 
        }
        const token = jwt.sign(newUser.id,SECRET_KEY)
        res.cookie( "token", token, options );
        console.log( "🍪", req.cookies );
        res.status(201).json({newUser,token})

    } catch (error) {
        res.status(400).json({error:error})
        
    }

}

module.exports ={
    createUser
}