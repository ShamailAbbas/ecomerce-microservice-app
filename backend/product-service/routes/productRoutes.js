const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
];

// Create a new order
router.get("/", async (req, res) => {
  res.send(products);
});
router.post("/", productController.createProduct);

module.exports = router;
