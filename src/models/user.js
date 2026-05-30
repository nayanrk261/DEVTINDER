const mongoose = require("mongoose");
const validator = require("validator");

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
        validate: {
      validator: function(value) {
        if(!validator.isStrongPassword(value)){
            throw new Error("enter a strong password " + value);
        }
      },
      message: "Gender not valid"
      }
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
        trim : true,
        validate: {
      validator: function(value) {
        if(!validator.isEmail(value)){
            throw new Error("Invalid email id " + value);
        }
      },
      message: "Gender not valid"
      }
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