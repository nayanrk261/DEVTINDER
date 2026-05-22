const mongoose = require("mongoose");

const ConnectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://nayankhandelwal261_db_user:sF0gKoV0YRv1XYS8@cluster0.bictlkd.mongodb.net/devTinder?appName=Cluster0"
    );
};

module.exports = ConnectDB;

