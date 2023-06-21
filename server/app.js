const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const cookieparser = require('cookie-parser')
const app = express()

dotenv.config({path: './config.env'})

require('./db/conn')
// const User = require('./model/userSchema')

app.use(express.json());
app.use(cookieparser()) 

const port = process.env.PORT || 8000

// Link to router file
app.use(require('./router/auth'))


app.listen(port, () => {
    console.log(`server start on port ${port}`);
})