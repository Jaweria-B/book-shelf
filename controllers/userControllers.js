const User = require("../models/userModel");
const uuid = require("uid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Wishlist=require("../models/WishListModel")
const Cart=require("../models/CartModel")

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log("tello");
    const deleteUser = await User.findByIdAndDelete(req.params._id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.EditProfile=async(req,res)=>{
  try {
     const user=await User.findOneAndUpdate({_id:req.params._id},
      req.body,{new:true});

      res.status(201).json({
        message:"success fully updated",
        user:user
      })
     
  } catch (error) {
    res.status(404).send(error);
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const find = await User.findOne({ username });

    if (!find) {
      res.status(404).send("user not exist");
    }
    const hashed = await bcrypt.compare(password, find.password);

    if (!hashed) {
      res.status(404).send("password is wrong");
    }

    const token = await jwt.sign(
      { username: username.trim(), id: find._id },
      "secret"
    );
    res.status(200).json({ user: find, token });
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username: username.trim(),
      email,
      password: hashedPassword,
    };
    const createdUser = await User.create(user);

    await Wishlist.create({user:createdUser._id})
    await Cart.create({user:createdUser._id})

    const token = await jwt.sign({ username, id: createdUser._id }, "secret");
    res.status(201).json({ user: createdUser, token });
  } catch (error) {
    res.status(404).send(error);
  }
};
