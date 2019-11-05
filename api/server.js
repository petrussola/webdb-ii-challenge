// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const actionRouter = require("../data/helpers/carsRouter");

// INITIALIZE EXPRESS INSTANCE

const server = express();

// MIDDLEWARE

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/cars", actionRouter);

// EXPORTS

module.exports = server;
