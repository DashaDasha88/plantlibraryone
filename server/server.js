require("dotenv").config();
const express = require("express");

const app = express();

console.log("kittycat");


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`hello - server is up and running on ${port}`)
});