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
}
module.exports = {
    UserModel
}