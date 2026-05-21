const express = require("express");
const { AdminAuth } = require("./middlewares/auth");
const { UserAuth } = require("./middlewares/auth");


const app = express();

// //optional b
// app.get(/^\/a(b)?c$/,(req,res) => {
//     res.send("get request")
// })

// //one or more b
// app.get(/^\/ab+c$/, (req,res)=>{
//     res.send("matched +");
// });

// //zero or more b
// app.get(/^\/ab*c$/, (req,res)=>{
//     res.send("matched *");
// });

// app.get("/user",(req,res) => {
//     console.log(req.query)
//     res.send({ firstname: "Nayan", lastname : "Khandelwal"})
// })

// app.get("/user/:userId/:name",(req,res) => {
//     console.log(req.params)
//     res.send({ firstname: "Nayan", lastname : "Khandelwal"})
// })



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

//EP-5

// app.use("/user",(req,res) => {
//     console.log("take Resposnse 1");
//     res.send("Response 1");
//     next();
// },
// (req,res) => {
//     console.log("take response 2");
//     res.send("response 2");
//     next();
// },
// (req,res) => {
//     console.log("take response 3");
//     res.send("response 3");
//     next();
// })

// app.use("/user",(req,res) => {
//     console.log("take from user 1");
//     res.send("Respose 1");
// })
// app.use("/user",(req,res) => {
//     console.log("take from user 2");
//     res.send("Respose 2");
// })



// app.use("/admin", AdminAuth);

// app.get("/user", UserAuth, (req,res) => {
//     res.send("User data sent");
// });

// app.get("/admin/getAllData",(req,res) => {
//     res.send("All data sent");
// });

// app.get("/admin/deleteUser",(req,res) => {
//     res.send("Deleted a User")
// });

app.get("/getUserData",(req,res) => {
    throw new Error("ujjksgshsfs");
    res.send("user data sent");
})



app.listen(3333, () => {
    console.log("server started at port 3333")
})

//?,+,*,regex,query,dynamic routes,params