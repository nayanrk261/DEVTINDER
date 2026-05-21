const AdminAuth = (res,req,next) => {
    console.log("Admin Auth getting checked");
    const token = "Abc";
    const isAdminAuthorised = token === "Abc";

    if(!isAdminAuthorised){
        res.status(401).send("unauthorised request");
    }
    else{
        next();
    }
};

const UserAuth = (res,req,next) => {
    console.log("Admin Auth getting checked");
    const token = "Abc";
    const isAdminAuthorised = token === "Abc";

    if(!isAdminAuthorised){
        res.status(401).send("unauthorised request");
    }
    else{
        next();
    }
};

module.exports = {
    AdminAuth,
    UserAuth,
};