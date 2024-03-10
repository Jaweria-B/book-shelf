const express = require("express");
const routes = express.Router();
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  getUserRelatedProduct,
  getCategoryRelatedProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productControllers");

routes.get("/allProduct", getAllProduct);
routes.get("/singleProduct/:_id", getSingleProduct);
routes.get("/category", getCategoryRelatedProduct);
routes.get("/user", getUserRelatedProduct);
routes.post("/createProduct", createProduct);
routes.post("/editProduct/:_id", editProduct);
routes.delete("/deleteProduct/:_id", deleteProduct);

module.exports = routes;
