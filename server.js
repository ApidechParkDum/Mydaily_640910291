const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonparser = bodyParser.json();

app.use("/", express.static("public"));
app.use(bodyParser.text());
app.listen(3000, function () {
    console.log("Server is lestening on port 3000");
  });