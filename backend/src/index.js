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
      // If the HTTP-only cookie exists, the user is authenticated
      res.sendStatus(200);
    } else {
      // If the HTTP-only cookie doesn't exist, the user is not authenticated
      res.sendStatus(401);
    }
  });
app.use('/api/v1/',surveyRouter)
app.use('/api/v1/',userRouter)
app.listen(port,()=>{
    console.log(`you app is running on port ${port}`)
})