const express = require("express"); // importuojam express moduli
const app = express(); // sukuriam nauja express aplikacija
const port = 3000; // nurodom port'a, kuriame bus paleista aplikacija

// sukuriame route "/" (kelia) kurio metu grazinsime teksta "Hello World!"
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// req - request (uzklausa)
// res - response (atsakymas)

// sukuriame API endpoint'a "/cars", kuris grazins masyva "cars"
const cars = ["audi", "bmw", "mercedes", "tesla"];

app.get("/cars", (req, res) => {
  res.send(cars);
});

// sukuriame API endpoint'a "/students", kuris grazins masyva "students"
const students = [
  { id: 1, name: "Jonas", age: 20 },
  { id: 2, name: "Petras", age: 21 },
  { id: 3, name: "Antanas", age: 22 },
];

app.get("/students", (req, res) => {
  res.send(students);
});

// sukuriame route "/about" (kelia) kurio metu grazinsime teksta "About page"
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
