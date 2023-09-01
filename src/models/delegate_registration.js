"user strict";
var dbConn = require("../../db.config");

var Delegatedetails = function (details) {
  this.registration_type = details.registration_type;
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

Delegatedetails.create = function (details, result) {
  let sql = `call  microsite_create_user(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
  dbConn.query(
    sql,
    [
      details.registration_type,
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
//-------------------------------------Delegate Form -------------------------------------------------------------
Delegatedetails.findById = function (id, result) {
  console.log("lllllllllllllllllll", id);
  dbConn.query(
    "call microsite_get_nonregistered_delegate();      ",
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
// ====================GetAll--Approve--Delegate======
Delegatedetails.findByApproved = function (id, result) {
  dbConn.query(
    "call microsite_get_approved_delegate();",
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
//-------------------------------------------Partner Form --------------------------------------------------------------------------

Delegatedetails.findByPartner = function (id, result) {
  dbConn.query(
    "call microsite_get_nonregistered_partner();",
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
// //================GetAll-Approve-Partner=======

Delegatedetails.findByApprovePartner = function (id, result) {
  dbConn.query(
    "call microsite_get_approved_partner();",
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
// -----------------------------------------Speaker Form --------------------------------------------------------
Delegatedetails.findBySpeaker = function (id, result) {
  dbConn.query(
    "call microsite_get_nonregistered_speaker();",
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
// //=============Get All Approved Speaker=================
Delegatedetails.findByApproveSpeaker = function (id, result) {
  dbConn.query(
    "call microsite_get_approved_speaker();",
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
//--------------------------------------------------------------------------------------------------------------------
Delegatedetails.findAll = function (company_id, result) {
  let sql = `call  Microsite_Getll_Delegate();`;
  dbConn.query(sql, company_id, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
//----------------------------------------------------------------------------------------------------------------------------------
Delegatedetails.update_approve = function (user_id, result) {
  dbConn.query(
    "call  microsite_update_users_approve_text(?);",
    [user_id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
//------------------------------------------------------------------------------------------------------------------------------------
Delegatedetails.update_unapprove = function (user_id, result) {
  dbConn.query(
    "call  microsite_update_users_unapprove_text(?);",
    [user_id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// ---------------------------------------Update All Status--------------------------------------------------------------------------------
Delegatedetails.update_status = function (userIDs, statusType, callback) {
    const query = `CALL microsite_approve_text(?, ?)`;

    dbConn.query(query, [userIDs, statusType], (err, results) => {
      if (err) {
        return callback(err, null);
      }

      return callback(null, results);
    });
  }
// -------------------------------------------------------------------------------------------------------------------------
// Delegatedetails.delete = function (form_id, result) {
//   dbConn.query("call  microsite_delete_delegate(?);", form_id, function (err, res) {
//     if (err) {
//       result(null, err);
//     } else {
//       result(null, res);
//     }
//   });
// };

module.exports = Delegatedetails;
