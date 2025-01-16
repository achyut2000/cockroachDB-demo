# Implementation of CockroachDB with Sequelize, Node.js, and Fastify

This project demonstrates how to implement **CockroachDB** with **Sequelize**, **Node.js**, and **Fastify** for building a scalable and performant backend application.

## Documentation References

For this implementation, I have referred to the following documentation sources:
- [CockroachDB Documentation](https://www.cockroachlabs.com/docs/)
- [Sequelize Documentation](https://sequelize.org/)
- [Fastify Documentation](https://www.fastify.io/docs/latest/)

These resources helped in understanding the setup and best practices for configuring the database, ORM, and server.

## Clone this repository
```bash
   git clone https://github.com/achyut2000/cockroachDB-demo.git
```
After cloning the repo follow the below steps
## Step-1: Running CockroachDB

To run CockroachDB locally, follow these steps:

1. **Install CockroachDB**:
   - You can download CockroachDB from the official website: [Install CockroachDB](https://www.cockroachlabs.com/docs/v21.1/install-cockroachdb)

2. **Start CockroachDB in Local Mode**:
   Once CockroachDB is installed, you can start a local instance using the following command:
    - If you want to run single instance then run the following command
       ```bash
         sh single-instance.sh (do the modifications like port number if required)
       ```
     - If you want to run multiple instances then run the following command
        ```bash
          sh multiple-instances.sh 
        ```
## Step-2: Open the admin UI running on ports 8080,8081,8082 
  - There in the UI you can see three nodes running 
