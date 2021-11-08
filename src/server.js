require('dotenv').config();
const express = require('express');
const mongoConnection = require('./service/mongo.connect');
const { host, port } = require('./config/connect');
const postRouter = require('./routes/post');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/post', postRouter);

server.listen(port, () => console.log(`Servidor iniciado em ${host}:${port}`));


