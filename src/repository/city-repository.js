const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
    async createCity(name) {
        try {
            const city = await City.create(name);
            return city;
        } catch (err) {
            console.log('Something went wrong in repository layer');
            throw { err };
        }
    }

    async deleteCity(cityid) {
        try {
            await City.destroy({
                where: {
                    id: cityid
                }
            });
        } catch (err) {
            console.log('Something went wrong in repository layer');
            throw { err };
        }
    }

    async getCity(cityid) {
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (err) {
            console.log('Something went wrong in repository layer');
            throw { err }
        }
    }

    async updateCity(cityid, data) {
        try {
            // here data will be an object; key value pair
            const city = await City.update(data, {
                where: {
                    id: cityid
                }
            });
            return city;
        } catch (err) {
            console.log('Something went wrong in repository layer during updating the city');
            throw { err };
        }
    }

    async getCities(filter) { //filter can be an empty object also, then it will return all the cities
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
            }
            const cities = await City.findAll();
            return cities;
        } catch (err) {
            console.log('Something went wrong in repository layer during fetching all the cities.');
            throw { err };
        }
    }

}
module.exports = CityRepository;