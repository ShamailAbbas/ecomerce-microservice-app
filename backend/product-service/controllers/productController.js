const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });

    // Save the order to the database
    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
