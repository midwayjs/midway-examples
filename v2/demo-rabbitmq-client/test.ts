const amqp = require("amqplib");

const queue = "demo";

async function sendMessage(message)
{
    const connection = await amqp.connect("amqp://localhost:32801");
    const channel = await connection.createChannel();
    let res= await channel.assertQueue(queue);
    console.log(res)
    await channel.sendToQueue(queue, new Buffer(message),
    {
        // RabbitMQ关闭时，消息会被保存到磁盘
        persistent: true
    });
}


setInterval(function()
{
    sendMessage("Hello, Fundebug!");
}, 1000)
