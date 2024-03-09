const express=require("express");
const UserRoutes=express.Router();
const {getAllUser,getSingleUser,deleteUser,changePassword,login,Signup, EditProfile} =require("../controllers/userControllers");
const { Authentication } = require("../controllers/Auth");

UserRoutes.get("/allUser",getAllUser);
UserRoutes.get("/findUser/:_id",getSingleUser);
UserRoutes.post("/login",Authentication,login);
UserRoutes.post("/Signup",Signup)
UserRoutes.post("/editProfile/:_id",EditProfile)
UserRoutes.post("/changePassword/:_id",changePassword)
UserRoutes.delete("/deleteUser/:_id",deleteUser);

module.exports=UserRoutes
