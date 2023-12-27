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
app.use(adminRoutes);
app.use(shopRoutes);

// tworzenie i nasłuchiwanie serwera
app.listen(3000);
