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

router.post("/", validateCar, (req, res) => {
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

// MIDDLEWARE

function validateCar(req, res, next) {
  if (Object.keys(req.body).length) {
    if (req.body.vin && req.body.make && req.body.model && req.body.mileage) {
      next();
    } else {
      res
        .status(500)
        .json({ message: `Please provide all mandatory car information` });
    }
  } else {
    res
      .status(500)
      .json({ message: `Please provide all mandatory car information` });
  }
}

module.exports = router;
