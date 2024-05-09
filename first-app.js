// const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  console.log('in middleware');
  next();
});

app.use((req, res, next)=>{
  console.log('in 2nd middleware');
  res.send('<h1>Hello from Express</h1>');
});

console.log('server started');

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);
