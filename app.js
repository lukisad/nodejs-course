// import express.js
const express = require("express");

// przypoisanie funckji do zmiennej
const app = express();

app.use("/", (req, res, next) => {
  console.log("This always run!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>The 'Add product' Page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express!!!</h1>");
});

// tworzenie i nasłuchiwanie serwera
app.listen(3000);
