const express = require("express");

const app = express();

//optional b
app.get(/^\/a(b)?c$/,(req,res) => {
    res.send("get request")
})

//one or more b
app.get(/^\/ab+c$/, (req,res)=>{
    res.send("matched +");
});

//zero or more b
app.get(/^\/ab*c$/, (req,res)=>{
    res.send("matched *");
});

app.get("/user",(req,res) => {
    console.log(req.query)
    res.send({ firstname: "Nayan", lastname : "Khandelwal"})
})

app.get("/user/:userId/:name",(req,res) => {
    console.log(req.params)
    res.send({ firstname: "Nayan", lastname : "Khandelwal"})
})



// app.get("/user",(req,res) => {
//     res.send("User get request")
// })

// app.post("/user",(req,res) => {
//     res.send("User post request")
// })

// app.delete("/user",(req,res) => {
//     res.send("User delete request")
// })

// app.patch("/user",(req,res) => {
//     res.send("User patch request")
// })

app.listen(3333, () => {
    console.log("server started at port 3333")
})

//?,+,*,regex,query,dynamic routes,params