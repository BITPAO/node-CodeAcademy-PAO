const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.get(cors());

app.get("/", (req, res) => {
  res.send("OK!");
});

const brands = ["audi", "bmw", "mercedes", "tesla"];

app.get("/brands", (req, res) => {
  res.send(brands);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
