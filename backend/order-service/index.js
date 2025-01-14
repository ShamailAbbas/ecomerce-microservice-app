const express = require("express");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orderRoutes");

const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.ORDER_SERVICE_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Use order routes
app.use("/order", orderRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
