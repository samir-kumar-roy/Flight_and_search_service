const { CityRepository } = require('../repository/index');
class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(name) {
        try {
            const city = await this.cityRepository.createCity(name);
            return city;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw { err };
        }
    }

    async deleteCity(cityid) {
        try {
            const response = await this.cityRepository.deleteCity(cityid);
            return response;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw { err };
        }
    }

    async updateCity(cityid, data) {
        try {
            const response = await this.cityRepository.updateCity(cityid, data);
            // response.name = data.name;
            // response.save();
            return response;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw { err };
        }
    }

    async getCity(cityid) {
        try {
            const city = await this.cityRepository.getCity(cityid);
            return city;
        } catch (err) {
            console.log('Something went wrong in service layer during fetching the city');
            throw { err };
        }
    }

    async getCities(filter) {
        try {
            const city = await this.cityRepository.getCities({ name: filter.name });
            return city;
        } catch (err) {
            console.log('Something went wrong in service layer during fetching cities');
            throw { err };
        }
    }
}
module.exports = CityService;