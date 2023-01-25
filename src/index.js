const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const ApiRoutes = require('./routes/index')
// importing the object with port number
const { PORT } = require("./config/serverConfig");

// const { Airport, City, Airplane } = require('./models/index');

// importing the repositoy layer
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`The server is listening on port ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity();
        // const airports = await Airport.findAll({ where: { city_id: 12 } });
        // console.log(JSON.stringify(airports, null, 2));
        // await Airplane.create({
        //     modelNumber: "Bombardier CR"
        // })

        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }

    });
}
setupAndStartServer();