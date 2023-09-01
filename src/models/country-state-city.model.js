
var dbConn = require("../../db.config");


exports.findAllCountry = function (result) {
  dbConn.query("call microsite_getCountries();", function (err, res) {
    if (err) {(err);

      result(err, null);
    } else {
      result(null, res);
    }
  });
};
exports.findStatebyCountryid = function (country_id, result) {
  dbConn.query(
    "call microsite_getStates(?);",
    country_id,
    function (err, res) {
      if (err) {(err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
exports.findCitybyStateid = function (state_id, result) {
  dbConn.query(
    "call  microsite_getCities(?);",
    state_id,
    function (err, res) {
      if (err) {(err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

// ---------------------------------------------------------------------------------------
exports.findCountryCode = function (country_id, result) {
  dbConn.query(
    "call microsite_getcountry_mobile_code();",
    country_id,
    function (err, res) {
      if (err) {(err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};