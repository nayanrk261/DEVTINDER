const express = require("express");
const { AdminAuth } = require("./middlewares/auth");
const { UserAuth } = require("./middlewares/auth");
const ConnectDB = require("./config/database");
const User = require("./models/user");


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

//---------------------------------------------------EP-5-----------------------------------------------

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

// app.get("/getuserdata",(req,res) => {
//     try{
//         throw new Error("ujjksgshsfs");
//         res.send("user data sent");;
//     }catch(err){
//         res.status(500).send("some error");
//     }
// })

// app.use("/",(err,req,res,next) => {
//     if(err){
//         res.status(500).send("something went wrong");
//     }
// })

//-------------------------------------------------------Episode 6------------------------------------------------
//EP-7 -> making signUp API dynamic
 
app.use(express.json());

app.post("/signup", async(req,res) => {
    const user = new User(req.body);

    try{
        await user.save();
        res.send("user added to database");
    }catch(err){
        res.status(500).send("error" + err.message);
    }
});

app.get("/user", async (req,res) => {
    const UserName = req.body.firstName;

    try{
        await User.find({userName : UserName});
        res.send(user);
    }
    catch (err){
        res.status(400).send("user not found");
    }
    
})

app.get("/feed", async (req,res) => {
    try{
        const user = await User.find({});
        res.send(user);
    }
    catch{
        res.status(500).send("something went wrong");
    }
})

//-------------------------::::::::::::::::::: Delete a user ::::::::::::::::::--------------------------------
app.delete("/delete", async (req,res) => {
    const userId = req.body.userId;

    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("user deleted succsesfully");
    }
    catch{
        res.status(500).send("something went wrong");
    }
})


//-----------------:::::::::::::::::::: Update a User :::::::::::::::::::::::::------------------------------------------
app.patch("/update", async (req,res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate({_id : userId}, data);
        runValidators : true,
        res.send("user updated succsessfully");
    }
    catch{
        res.status(500).send("something went wrong");
    }
})


ConnectDB()
    .then(() => {
        console.log("Database Conected");
        app.listen(3333, () => {
        console.log("server started at port 3333");
       });
    })
    .catch((err) => {
        console.log("Database not connected");
    })

//--------------------------Episode - 8---------------------------------------------





//?,+,*,regex,query,dynamic routes,params