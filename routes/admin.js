const path = require('path');
const express = require("express");

const rootDir = require('../util/path')

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - add-product');
  // res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="title" placeholder="title"/><input type="number" name="size" placeholder="size"/><button type="submit">Add Product</button></form>');
  res.sendFile(path.join(rootDir,"views","add-product.html"));
});

router.post('/add-product',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;