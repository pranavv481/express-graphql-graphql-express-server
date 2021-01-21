const express = require("express");
require('dotenv').config();

const app = express()

app.get("/check",(req, res)=>{
    res.send("hii")
})

app.listen(process.env.PORT, ()=>{
    console.log(`server started at ${process.env.PORT}`)
})

