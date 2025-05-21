const express = require("express");
const app=express()

const reqFilter=(req,resp,next)=>{

    if(!req.query.age){
        resp.send("please  provide age")
    }
    else{
        next();
    }
}

app.get("/",(req,res)=>{
    res.send("welcome to home page")
});

app.get("/users",reqFilter,(req,res)=>{
    res.send("welcome to users")
});

app.listen(8000)