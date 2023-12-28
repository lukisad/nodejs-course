// import express.js
const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

// przypoisanie funckji do zmiennej
const app = express();

// Obsługa Body parser'a
app.use(bodyParser.urlencoded({ extended: false }));

// Uzycie obiektu router'a
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Obsługa strony 404
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

// tworzenie i nasłuchiwanie serwera
app.listen(3000);
