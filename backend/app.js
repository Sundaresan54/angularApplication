const express = require("express")

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req,res,next) => {
//     console.log("Setting up the express App");
//     next();
// })


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    res.setHeader("Access-Control-Allow-Methods","GETS,POST,PATCH,DELETE,OPTIONS")
    next();
});

app.post("/api/posts",(req,res,next) =>{
    const post =req.body;
    console.log(post,"hello");
    res.status(201).json({
        message:"sucessfully coneted"
    })
});
app.get("/api/posts",(req,res,next) => {
    const post = [
        {
            id:"yetdfet",
            title:"first post",
            content:"posted by sundar"
        },
        {
            id:"udfhuvh",
            title:"second post",
            content:"posted by sundaresan"
        }
    ]
    // res.send("hello there first express app");
    res.status(200).json({
        message:"successfully got data from server",
        post:post
    })
})

module.exports = app;