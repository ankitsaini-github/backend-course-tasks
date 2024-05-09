const http = require("http");

const express = require("express");

const app = express();

console.log('server started');
const server = http.createServer();

server.listen(4000);
