const express = require("express");
const app = express();
app.use(express.static('public'))
app.set("view engine", "ejs");
const port = 8000;

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/chapter1", function (req, res) {
  res.render("pages/chapter1");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
