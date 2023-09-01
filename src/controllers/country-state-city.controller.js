"use strict";

const CountryStateCity = require("../models/country-state-city.model");

exports.findAllCountry = function (req, res) {
  CountryStateCity.findAllCountry(function (err, country) {
    if (err) { console.log(err);
      return res.status(400).json({
        status: false,
        error: true,
        message: "Something went wrong. Please try again.",
     
      });  }
    else if (country[0][0].response === "fail")
      return res
        .status(404)
        .send({
          success: false,
          error: true,
          message: "country does not exist!",
        });
    else
      res
        .status(200)
        .json({
          data: country[0],
          success: true,
          error: false,
          message: "country fetched successfully!",
          count: country[1][0].count,
        });
  });
};

exports.findstate = function (req, res) {
  CountryStateCity.findStatebyCountryid(
    req.params.country_id,
    function (err, state) {
      if (err) { console.log(err);
        return res.status(400).json({
          status: false,
          error: true,
          message: "Something went wrong. Please try again.",
       
        });  }
      else if (state[0][0].response === "fail")
        return res
          .status(404)
          .send({
            success: false,
            error: true,
            message: "state does not exist!",
          });
      else
        res
          .status(200)
          .json({
            data: state[0],
            success: true,
            error: false,
            message: "state fetched successfully!",
            count: state[1][0].count,
          });
    }
  );
};
exports.findcity = function (req, res) {
  CountryStateCity.findCitybyStateid(req.params.state_id, function (err, city) {
    if (err) { console.log(err);
      return res.status(400).json({
        status: false,
        error: true,
        message: "Something went wrong. Please try again.",
     
      });  }
    else if (city[0][0].response === "fail")
      return res
        .status(404)
        .send({ success: false, error: true, message: "city does not exist!" });
    else
      res
        .status(200)
        .send({
          data: city[0],
          success: true,
          error: false,
          message: "city fetched successfully!",
          count: city[1][0].count,
        });
  });
};

exports.findCountryCode = function (req, res) {
  CountryStateCity.findCountryCode(
    function (err, Details) {
      if (err) {
        console.log(err);
        return res.status(400).json({
          status: false,
          error: true,
          message: "Something went wrong. Please try again.",
        });
      }
      else
      return res.json({
        data: Details[0],
        success: true,
        error: false,
        message: "All Country Code fetched successfully!",
      });
    }
  );
}