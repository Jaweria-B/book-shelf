const mongoose=require("mongoose");

const CategoryProperty=mongoose.Schema({
      attributes:{
        type:mongoose.Schema.Types.Mixed
      }
})

const CategoryPropertyModel= mongoose.model('CategoryProperty',CategoryProperty)
module.exports=CategoryPropertyModel