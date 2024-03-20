const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {port} = require('./config')
const cors = require('cors')
const express = require('express');
const { surveyRouter } = require('./routes/surveyRouter');
const { userRouter } = require('./routes/userRouter');
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};
app.use( cors(corsOptions) );
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello from pravin")
})
app.get("/check-auth", (req, res) => {
    if (req.cookies.token) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  });
  app.post('/logout',(req,res)=>{
   try {
    res.cookie('token','',{expires:new Date(0),httpOnly:true})
        res.status(200).send('Logout successful');
   } catch (error) {
    console.log(error)
   }
        
    
  })
app.use('/api/v1/',surveyRouter)
app.use('/api/v1/',userRouter)
app.listen(port,()=>{
    console.log(`you app is running on port ${port}`)
})