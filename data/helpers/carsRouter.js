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

router.get("/:id", validateCarId, (req, res) => {
  res.status(200).json(req.data);
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

router.delete("/:id", validateCarId, (req, res) => {
  //   const { id } = req.data.id;
  Cars.remove(req.data.id)
    .then(data => {
      res.status(200).json({ message: `Car has been deleted` });
    })
    .catch(error => {
      res.status(500).json({
        message: `Error deleting car to the server: ${error.message}`
      });
    });
});

router.put("/:id", [validateCarId, validateCar], (req, res) => {
  Cars.update(req.data.id, req.body)
    .then(data => {
      res.status(200).json({ message: `Car ${req.data.id} has been edited` });
    })
    .catch(error => {
        res.status(500).json({
            message: `Error updating car to the server: ${error.message}`
    });
});

// MIDDLEWARE

function validateCarId(req, res, next) {
  const { id } = req.params;
  Cars.getById(id)
    .then(data => {
      if (data) {
        req.data = data;
        next();
      } else {
        res
          .status(404)
          .json({ message: `Car with id ${id} could not be found` });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: `There was an error retrieving car ${id}: ${error.message}`
      });
    });
}

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
