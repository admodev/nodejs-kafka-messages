const express = require('express');
const kafka = require('kafka-node');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const client = new kafka.KafkaClient({ kafkaHost: 'bitnami-kafka_3_2:9092' });

var consumer = new kafka.Consumer(client, [ { topic: 'test' } ]);

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Kafka!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

consumer.on('message', (message) => {
  console.log(message);
});