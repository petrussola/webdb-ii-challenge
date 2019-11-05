const express = require("express");
const Cars = require("./carsDb");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: `welcome from dummy endpoint!` });
});

module.exports = router;
