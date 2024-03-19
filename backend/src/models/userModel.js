const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const app = express()
app.use(express.json())


class UserModel{


    static async createUser(data){
        return await prisma.user.create({
            data:{
                
email:data.email,
name:data.name,
password:data.password
            }
        })
    }
    static async signInUser(data){
        return await prisma.user.findUnique({
            where:{
                email:data.email,
                password:data.password
            }
        })
    }
    static async createVote(questionId,optionId){
       
        
        return await prisma.option.update({
            where:{
                id:parseInt(optionId)
            },
            data:{
                votes:{increment:1}
            }
        })
    }
    static async findUser(id){
        return await prisma.user.findUnique({
            where:{
                id:parseInt(id)
            },
            select:{
                name:true
            }
        })
    }
}
module.exports = {
    UserModel
}