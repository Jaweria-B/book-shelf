const mongoose=require("mongoose")

const WishListSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"productModel"
        }
    ]
})

const WishListModel=mongoose.model("Wishlist",WishListSchema)
module.exports=WishListModel