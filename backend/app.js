const express = require("express")

const app = express();

app.use((req,res,next) => {
    console.log("Setting up the express App");
    next();
})

app.use((req,res,next) => {
    res.send("hello there first express app");
})

module.exports = app;