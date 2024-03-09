const mongoose=require('mongoose')

const connection=mongoose.connect('mongodb://127.0.0.1:27017/Artstore',{
    useNewUrlParser: true,
      useUnifiedTopology: true,
   
}).then(()=>{
    console.log("database connected")
}).catch((error)=>{
    console.log(`error in connection with databse ${error}`)
})


module.exports=connection