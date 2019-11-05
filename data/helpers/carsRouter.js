const express = require("express");
const Cars = require("./carsDb");

const router = express.Router();

router.get("/", (req, res) => {
  Cars.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Data could not be retrieved: ${error.message}` });
    });
});

router.post("/", (req, res) => {
  Cars.insert(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: `Error posting car to the server: ${error.message}` });
    });
});

module.exports = router;
