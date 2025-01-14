const amqp = require("amqplib");

let channel, connection;

async function connectToRabbitMQ() {
  try {
    connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue("order-queue");
    console.log("Connected to RabbitMQ");
  } catch (error) {
    console.error("Failed to connect to RabbitMQ:", error);
  }
}

connectToRabbitMQ();

module.exports = { channel };
