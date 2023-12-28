const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../helper/path");

// Obsługa ściezki /
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
