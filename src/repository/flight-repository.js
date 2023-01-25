const { Op } = require("sequelize");
const { Flights } = require("../models/index");
class FlightRepository {

    // creating a private filter method for flight
    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice) {
            Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
        }
        if (data.maxPrice && data.minPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    { price: { [Op.gte]: data.minPrice } },
                    { price: { [Op.lte]: data.maxPrice } }
                ]
            });
        }
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (err) {
            console.log('Something went wrong in repository layer during creating the flight');
            throw { err };
        }
    }

    // getting a single flight, i.e; to generate boarding pass for a flight
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (err) {
            console.log('Something went wrong in repository layer');
            throw { err }
        }
    }

    // getting a single flight, i.e; to generate boarding pass for a flight
    async getFlights(filter) {
        try {
            const filterObject = await this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
        } catch (err) {
            console.log('Something went wrong in repository layer');
            throw { err }
        }
    }

    // updating the flight table when doing a booking; i.e. updating the number of totalSeats available

    async updateFlight(flightId, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            })
            return true;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw { err }
        }
    }
}
module.exports = FlightRepository;