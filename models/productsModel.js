const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    // required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    username: String,
  },
  price: {
    type: Number,
    // required: true,
    maxLength: [8, "length should not increase 8 characters"],
  },
  category: {
    type: String,
    // required: true,
    // enum: ["Calligraphy", "Painting", "Sculpture", "Drawing", "Photography"],
  },
  categoryProperties: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryPropertyModel",
  },
  ratings: [
    {
      type: Number,
      default: 0,
    },
  ],
  reviews: [
    {
      type: String,
    },
  ],
  stock: {
    type: Number,
    // required: true,
    default: 1,
  },
  images:
    //  [
    {
      type: String,
      // base64: {
      //   type: String,
      //   // required: true,
      // },
    },
  // ],
});

const productModel = mongoose.model("Product", ProductSchema);
module.exports = productModel;
