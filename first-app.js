// const http = require("http");
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);
app.use(contactRoutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

console.log('server started');

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);
