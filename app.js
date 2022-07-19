const express = require("express");
const Router = require("./routes/route");
const app = express();
app.use(express.json());
app.use(Router);
module.exports = app;