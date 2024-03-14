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
    static async createVote(id){
        let count = 0
        return await prisma.option.updateMany({
            where:{
                questionId:id
            },
            data:{
                votes:count++
            }
        })
    }
}
module.exports = {
    UserModel
}