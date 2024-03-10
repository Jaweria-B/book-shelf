const Product = require("../models/productsModel");
const categoryProperty = require("../models/categoryProperties");
const User = require("../models/userModel");

exports.createProduct = async (req, res, next) => {
  try {
    const {
      title,
      author,
      category,
      price,
      stock,
      images,
      description,
      categoryProperties,
    } = req.body;

    const Property = await categoryProperty.create({
      attributes: categoryProperties,
    });

    const Prod = {
      title,
      author,
      category,
      price,
      stock,
      images,
      description,
      categoryProperties: Property,
    };

    const product = await Product.create(Prod);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params._id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(401).send(error);
  }
};
exports.editProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(404).send(error);
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    res.status(201).json(product);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserRelatedProduct = async (req, res) => {
  try {
    const user = req.query.category;
    const findUser = await Product.find({ user });
    res.status(201).send(findUser);
  } catch (error) {
    res.status(401).send(error);
  }
};
exports.getCategoryRelatedProduct = async (req, res) => {
  try {
    const category = req.query.category;
    const findCategory = await Product.find({ category });
    const Products = {};
    res.status(201).json({ Products: findCategory });
  } catch (error) {
    res.status(401).send(error);
  }
};
