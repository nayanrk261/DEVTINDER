const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3,
    },
    lastName : {
        type : String,
    },
    password : {
        type : String,
        required : true,
        minLength : 5,
    },
    age : {
        type : Number,
        required : true,
        min : 18,
    },
    emailID : {
        type : String,
        required : true,
        lowercase : true,
        trim : true
    },
    gender: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return ["male", "female", "other"].includes(value);
      },
      message: "Gender not valid"
    }
   },
    about : {
        type : String,
        default : "this is your about",
    }
},{ timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;