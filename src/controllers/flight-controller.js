const { FlightService } = require("../services/index");
const { SuccessCodes } = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestBody = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.departureAirportId,
            price: req.body.price,
            arrivalTime: req.body.arrivalTime,
            departure: req.body.departureTime
        }
        const flight = await flightService.createFlight(flightRequestBody);
        return res.status(201).json({
            data: flight,
            err: {},
            message: "Flight created successfully",
            success: true
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            message: "Not able to create a flight",
            err: err,
            success: false
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            err: {},
            message: "Flights fetched successfully",
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            data: {},
            message: "Not able to fetch flights",
            err: err,
            success: false
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            err: {},
            message: "Flight fetched successfully",
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            data: {},
            message: "Not able to fetch flights",
            err: err,
            success: false
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            err: {},
            message: "Flight updated successfully",
            success: true
        });
    } catch (err) {
        return res.status(500).json({
            data: {},
            message: "Not able to update flight",
            err: err,
            success: false
        });
    }
}

// exporting the modules
module.exports = {
    create,
    getAll,
    get,
    update
}