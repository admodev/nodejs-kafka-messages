# Node-Kafka

#### Producer/Consumer implementation

This is a simple demonstration of Node.js and Kafka producer/consumer messages implementation with Docker.

To start the containers run the following command in the root directory:

```bash
docker-compose up --build -d
```

Now, you can enter the apache kafka container to bootstrap the server, create and list topics and start producing them, then, you can enter the app container and start consuming the messages from the producer by watching the container logs with the following command:

```bash
docker logs -f container_id_here
```