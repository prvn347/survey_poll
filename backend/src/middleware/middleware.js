const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config");
const express  = require('express')
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Middleware function to verify JWT token from HTTPOnly cookie
const verifyTokenMiddleware = (req, res, next) => {
    // Extract token from HTTPOnly cookie
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ error: "Unauthorizedj" });
    }

    try {
        // Verify token
        
        const payload = jwt.verify(token, SECRET_KEY);
        // console.log(payload)
        // Set user ID in request object
        req.userId = payload;
        next(); // Move to next middleware
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = {
    verifyTokenMiddleware};
