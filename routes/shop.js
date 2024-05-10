const express = require("express");

const router = express.Router();

router.get('/shop',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.send('<h1>This is Shop !!</h1>');
});

router.get('/',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.send('<h1>Hello from Express</h1>');
});

module.exports = router;