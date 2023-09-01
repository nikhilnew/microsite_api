
const express = require('express');
const bodyParser = require('body-parser');
// const doenv = require("dotenv");
const path = require("path");
const dbConn = require("../Microsite/db.config");
require("dotenv").config();
// const routes = require('./Route/register_routes');
// create express app
const app = express();
app.set('view engine', 'ejs');
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// const Pending_report = require('./src/routes/PendingReport.routes')
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        message: err.message,
    });
});
// app.use(routes);
// listen for requests

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
});

const CountryStateCity = require("./src/routes/country-state-city.routes");
const delegate_registration = require("./src/routes/delegate_registration");
const speaker_registration = require("./src/routes/speaker_registration");
const partner_registration = require("./src/routes/partner_registration");

app.use("/api/v1", CountryStateCity);
app.use("/api/v1/registration", delegate_registration);
app.use("/api/v1/speaker", speaker_registration);
app.use("/api/v1/partner", partner_registration);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});