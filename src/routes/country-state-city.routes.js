const express = require("express");
const router = express.Router();
const CountryStateCityController = require("../controllers/country-state-city.controller");


// Apply token authentication middleware to all routes

// Retrieve countries
router.get("/getcountry", CountryStateCityController.findAllCountry);
router.get("/getAll/countrycode", CountryStateCityController.findCountryCode);
// Retrieve state by country id
router.get("/getstate/:country_id", CountryStateCityController.findstate);
// Retrieve city by state id
router.get("/getcity/:state_id",CountryStateCityController.findcity);
module.exports = router;
 






