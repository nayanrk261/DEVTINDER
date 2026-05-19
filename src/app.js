const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.send("Hello from the home page")
})

app.get("/hello",(req,res) => {
    res.send("hello bhai")
})

app.get("/goat",(req,res) => {
    res.send("Goat - Greatest of all Time")
})

app.listen(3333, () => {
    console.log("server started at port 3333")
})