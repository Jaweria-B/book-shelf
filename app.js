const express = require("express");
const connection=require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const ProductRoutes=require('./routes/productRoutes')
const UserRoutes=require('./routes/userRoutes');
const WishListRoutes= require("./routes/wishlistRoutes");
const CartRoutes=require("./routes/cartRoutes")
const app = express();
connection;

app.use(cors());
app.use(bodyParser.json({limit:'10mb',extended:true}))
app.use(express.json());

app.use("/User",UserRoutes);
app.use("/Product",ProductRoutes);
app.use("/Wishlist",WishListRoutes);
app.use("/Cart",CartRoutes);


app.listen(3001, () => {
  console.log(`listening to server 3001`);
});
