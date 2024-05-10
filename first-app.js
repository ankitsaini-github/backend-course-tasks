// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - add-product');
  res.send('<form action="/product" method="POST" ><input type="text" name="title" placeholder="title"/><input type="number" name="size" placeholder="size"/><button type="submit">Add Product</button></form>');
});

app.post('/product',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  console.log(req.body);
  res.redirect('/');
});

app.use('/',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.send('<h1>Hello from Express</h1>');
});

console.log('server started');

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);
