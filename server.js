// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require('dotenv').config();

// INITIALIZE EXPRESS INSTANCE

const server = express();

// MIDDLEWARE

server.use(cors());
server.use(helmet());
server.use(express.json());

// EXPORTS

module.exports = server;