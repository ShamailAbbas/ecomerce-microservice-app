const Order = require("../models/Order");
const { channel } = require("../config/rabbitmq");

exports.createOrder = async (req, res) => {
  try {
    const { product, price } = req.body;
    const order = new Order({ product, price });

    // Save the order to the database
    await order.save();

    // Send the order to the RabbitMQ queue
    channel.sendToQueue("order-queue", Buffer.from(JSON.stringify(order)));

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
