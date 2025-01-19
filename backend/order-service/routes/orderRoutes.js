const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();
const orders = [
  {
    id: 1,
    product: "Laptop",
    price: 1200,
    status: "Processing....",
  },
  {
    id: 2,
    product: "Smartphone",
    price: 800,
    status: "Shipped",
  },
  {
    id: 3,
    product: "Headphones",
    price: 150,
    status: "Delivered",
  },
  {
    id: 4,
    product: "Tablet",
    price: 500,
    status: "Processing",
  },
  {
    id: 5,
    product: "Smartwatch",
    price: 250,
    status: "Shipped",
  },
];

// Create a new order
router.get("/", async (req, res) => {
  res.send(orders);
});
router.post("/", orderController.createOrder);

module.exports = router;
