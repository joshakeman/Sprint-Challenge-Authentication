const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('../auth/auth-router')
const jokesRouter = require('../jokes/jokes-router')

// const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
// server.use('/api/users', userRouter)
server.use('/api/jokes', jokesRouter)

server.use('/', (req, res) => {
    res.send("It's alive!");
  });

// configureRoutes(server);

module.exports = server;
