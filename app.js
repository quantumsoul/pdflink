const express = require("express");
const Router = require("./routes/route");
const app = express();
app.use((req, res, next) => {
    // allow different IP address
    res.setHeader('Access-Control-Allow-Origin', '*');
    // allow different header field 
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  
    next();
  })
app.use(express.json());
app.use(Router);
module.exports = app;