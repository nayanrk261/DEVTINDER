const express = require("express");

const app = express();

app.get("/user",(req,res) => {
    res.send("User get request")
})

app.post("/user",(req,res) => {
    res.send("User post request")
})

app.delete("/user",(req,res) => {
    res.send("User delete request")
})

app.patch("/user",(req,res) => {
    res.send("User patch request")
})

app.listen(3333, () => {
    console.log("server started at port 3333")
})