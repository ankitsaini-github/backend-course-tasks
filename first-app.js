const http = require("http");
const routes = require('./routes')

console.log('server started');
const server = http.createServer(routes);

server.listen(4000);
