const path = require('path');

const express = require("express");

const rootDir = require('../util/path');

const router = express.Router();

router.get('/shop',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.send('<h1>Hello from shop</h1>');
});

router.get('/',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.sendFile(path.join(rootDir,"views","shop.html"));
});

module.exports = router;