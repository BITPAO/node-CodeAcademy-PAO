const express = require("express"); // importuojam express moduli
const app = express(); // sukuriam nauja express aplikacija
const port = 3006; // nurodom port'a, kuriame bus paleista aplikacija

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
  { name: "Jonas", surname: "Jonaitis" },
  { name: "Petras", surname: "Petraitis" },
  { name: "Antanas", surname: "Antanaitis" },
];

app.get("/students", (req, res) => {
  res.send(students);
});

// sukuriame API endpoint'a "/groceries/:id", kuris grazins studento objekta pagal id
const groceries = [
  { id: 1, name: "Milk" },
  { id: 2, name: "Bread" },
  { id: 3, name: "Butter" },
  { id: 4, name: "Cheese" },
];

app.get("/groceries/:id", (req, res) => {
  res.send(groceries[req.params.id - 1]);
});

// sukuriame route "/about" (kelia) kurio metu grazinsime teksta "About page"
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
