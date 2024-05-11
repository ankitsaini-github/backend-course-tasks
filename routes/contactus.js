const path = require('path');

const express = require("express");

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.sendFile(path.join(rootDir,"views","contactus.html"));
});
router.get('/success',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  // console.log('in middleware - express');
  res.sendFile(path.join(rootDir,"views","success.html"));
});
router.post('/contactus',(req, res, next)=>{
  if (req.url === '/favicon.ico') {
    return res.status(204).end();
  }
  console.log(req.body);
  res.redirect('/success');
});

module.exports = router;