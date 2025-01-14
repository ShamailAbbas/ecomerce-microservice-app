const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product: String,
  price: Number,
});

module.exports = mongoose.model("Order", orderSchema);
