const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

// aca entran las request

const server = express();

// .use = cuando reciba una req que entre a lo que tiene .use
//middleware

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
