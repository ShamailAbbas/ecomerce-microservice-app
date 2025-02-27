const express = require("express");
const amqp = require("amqplib");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());
const PORT = process.env.PORT || 5000;

// RabbitMQ connection setup
async function connectToRabbitMQ() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue("order-queue");

    console.log("Connected to RabbitMQ and waiting for messages..");

    // Consume messages from the queue
    channel.consume("order-queue", (message) => {
      if (message !== null) {
        const order = JSON.parse(message.content.toString());
        console.log(`Received order: ${order.product} for $${order.price}`);

        // Acknowledge the message
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error("Failed to connect to RabbitMQ:", error);
  }
}

app.get("/notification", async (req, res) => {
  res.send([
    {
      id: 1,
      message: "Your order has been placed successfully...",
      timestamp: "2023-10-01T10:00:00Z",
    },
    {
      id: 2,
      message: "Your payment was processed successfully.",
      timestamp: "2023-10-01T10:05:00Z",
    },
    {
      id: 3,
      message: "Your order has been shipped.",
      timestamp: "2023-10-01T10:10:00Z",
    },
    {
      id: 4,
      message: "Your order is out for delivery.",
      timestamp: "2023-10-01T10:15:00Z",
    },
    {
      id: 5,
      message: "Your order has been delivered.",
      timestamp: "2023-10-01T10:20:00Z",
    },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
  connectToRabbitMQ(); // Connect to RabbitMQ when the server starts
});
