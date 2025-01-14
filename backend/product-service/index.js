const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.PRODUCT_SERVICE_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Use product routes
app.use("/product", productRoutes);

// Start the server
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
