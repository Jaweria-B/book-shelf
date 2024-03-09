const mongoose=require("mongoose")

const CartSchema=mongoose.Schema({
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

const CartModel=mongoose.model("Cart",CartSchema)
module.exports=CartModel