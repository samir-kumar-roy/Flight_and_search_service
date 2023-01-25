const { FlightMiddlewares } = require('../../middlewares/index');
const express = require("express");
const router = express.Router();

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require('../../controllers/airport-controller');

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);

router.post("/flights", FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get("/flights", FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

router.post("/airports", AirportController.create);

module.exports = router;