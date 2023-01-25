const { CityService } = require("../services/index");


const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "A city created successfully",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create city..",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "city deleted successfully",
            err: {}
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create city..",
            err: err
        });

    }

}

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "city fetched successfully",
            err: {}
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch city..",
            err: err
        });

    }

}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "cities fetched successfully",
            err: {}
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch cities..",
            err: err
        });

    }

}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}