const { Airplane } = require("../models/index");
class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (err) {
            console.log("Something went wrong in the repository layer during creating the flight");
            throw { err };
        }
    }
}
module.exports = AirplaneRepository;