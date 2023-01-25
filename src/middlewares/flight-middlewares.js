const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.price ||
        !req.body.arrivalTime ||
        !req.body.departureTime
    ) {
        return res.status(400).json({
            data: {},
            success: false,
            message: "bad request body",
            err: "Missing one or more parameter on the body"
        });
    }
    next();
}
module.exports = {
    validateCreateFlight
};