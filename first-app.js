// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).send('<h1>404, page not found !</h1>')
})

console.log('server started');

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);
