const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");
const PORT = process.env.PORT || 3000;
app.use((req, res, next) => {
  // allow different IP address
  res.setHeader('Access-Control-Allow-Origin', '*');
  // allow different header field 
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');

  next();
})
app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});