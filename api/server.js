require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./routers/authRouter.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => res.send('sanity check my guy'))

server.use('/api', authRouter);

module.exports = server;