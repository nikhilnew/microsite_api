"user strict";
var dbConn = require("../../db.config");

var Partnerdetails = function (details) {
    this.title = details.title;
    this.first_name = details.first_name;
    this.last_name = details.last_name;
    this.department = details.department;
    this.designation = details.designation;
    this.mobile_number = details.mobile_number;
    this.email_id = details.email_id;
    this.company_name = details.company_name;
    this.company_address = details.company_address;
    this.address_line_1 = details.address_line_1;
    this.address_line_2 = details.address_line_2;
    this.address_line_3 = details.address_line_3;
    this.country = details.country;
    this.state = details.state;
    this.city = details.city;
    this.pin_code = details.pin_code;
    this.website = details.website;
    this.conference_day = details.conference_day;
    this.organization_role = details.organization_role;
    this.represent_pharmaceutical_industry = details.represent_pharmaceutical_industry;
    this.manufacturing_solution_PI = details.manufacturing_solution_PI;
    this.part_of_product = details.part_of_product;
    this.attending_purpose = details.attending_purpose;
    this.specific_solution = details.specific_solution;
    this.attended_innopack = details.attended_innopack;
    this.firm_teamsize = details.firm_teamsize;
    this.status = details.status;
    

};

Partnerdetails.create = function (details, result) {
    let sql = `call  create_partner(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    dbConn.query(
        sql,
        [
            details.title,
            details.first_name,
            details.last_name,
            details.department,
            details.designation,
            details.mobile_number,
            details.email_id,
            details.company_name,
            details.company_address,
            details.address_line_1,
            details.address_line_2,
            details.address_line_3,
            details.country,
            details.state,
            details.city,
            details.pin_code,
            details.website,
            details.conference_day,
            details.organization_role,
            details.represent_pharmaceutical_industry,
            details.manufacturing_solution_PI,
            details.part_of_product,
            details.attending_purpose,
            details.specific_solution,
            details.attended_innopack,
            details.firm_teamsize,
            details.status

        ],

        function (err, res) {
            if (err) {
                
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

Partnerdetails.findById = function (id, result) {
  
      dbConn.query(
        "call Microsite_GetbyId_Partner(?);      ",
        id,
        function (err, res) {
          if (err) {
            result(null, err);
          } else {
            result(null, res);
          }
        }
      );
    };
  
    Partnerdetails.findAll = function (company_id, result) {
      let sql = `call  Microsite_Getll_Partner();`;
      dbConn.query(sql, company_id, function (err, res) {
        if (err) {
          result(null, err);
        } else {
          result(null, res);
        }
      });
    };

    // Partnerdetails.delete = function (form_id, result) {
    //   dbConn.query("call  microsite_delete_partner(?);", form_id, function (err, res) {
    //     if (err) {
    //       result(null, err);
    //     } else {
    //       result(null, res);
    //     }
    //   });
    // };
  
module.exports = Partnerdetails;