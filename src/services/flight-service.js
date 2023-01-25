const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");


class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival time can't be less than departure time." }
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            // console.log(data.airplaneId)
            throw { err };
        }
    }

    //  get all flight data
    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getFlights(data);
            return flights;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw { err };
        }
    }

    // get a single flight
    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw { err };
        }
    }

    async updateFlight(flightId, data) {
        try {
            console.log("from flight service & update method", data);
            const response = await this.flightRepository.updateFlight(flightId, data);
            return response;
        } catch (err) {
            console.log("Somethign went wrong in the service lyer");
            throw { err }
        }
    }




}
module.exports = FlightService;