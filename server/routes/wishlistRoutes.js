const express=require("express");
const { AddToWishList, RemoveFromWishList, getWishlistItems } = require("../controllers/WishListControllers");
const routes=express.Router();


routes.post("/add/:_id",AddToWishList);
routes.post("/remove/:_id",RemoveFromWishList);
routes.get("/getallwish/:_id",getWishlistItems);

module.exports=routes