const Delegatedetails = require("../models/delegate_registration");

exports.Delegatedetails = function (req, res) {
  const new_details = new Delegatedetails(req.body);

  //  Check if status is valid
  if (!['0', '1', '2'].includes(new_details.status)) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Invalid status value. Status must be 0, 1, or 2.",
    });
  }

  Delegatedetails.create(new_details, function (err, details) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        error: true,
        message: "Something went wrong. Please try again.",

      });
    }
    if (details[0][0].response === "fail")
      return res.json({
        success: false,
        error: true,
        message: "This details already exist in this Form ",
      });
    else
      return res.json({
        success: true,
        error: false,
        message: "Details Added Successfully!",
      });
  });
}
// ------------------------------------------------------------------------------------------------------------------------
exports.findAll = function (req, res) {
  Delegatedetails.findAll(function (err, details) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        error: true,
        message: "Something went wrong. Please try again.",

      });
    }
    if (details[0][0].response === "fail")
      return res.status(200).json({
        success: false,
        error: true,
        message: "details does not exist with this company!",
      });
    else
      return res.json({
        data: details[0],
        success: true,
        error: false,
        message: "details fetched successfully!",
      });
  });
};
// ------------------------------------Delegate Form ------------------------------------------------------------------
exports.findById = function (req, res) {
  Delegatedetails.findById(
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
        console.log("avbsbs", Details);
      return res.json({
        data: Details,
        success: true,
        error: false,
        message: "Delegate Details fetched successfully!",
      });
    }
  );
};

// ==============Approve-Delegate=========

exports.findByApproved = function (req, res) {
  Delegatedetails.findByApproved(
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
        console.log("avbsbs", Details);
      return res.json({
        data: Details,
        success: true,
        error: false,
        message: "Approve Delegate Details fetched successfully!",
      });
    }
  );
};


//-------------------------------------Partner Form ----------------------------------------------

exports.findByPartner = function (req, res) {
  Delegatedetails.findByPartner(
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
        console.log("avbsbs", Details);
      return res.json({
        data: Details,
        success: true,
        error: false,
        message: "Partner Details fetched successfully!",
      });
    }
  );
}

// //==============Approve Partner ==============

exports.findByApprovePartner = function (req, res) {
  Delegatedetails.findByApprovePartner(
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
        console.log("avbsbs", Details);
      return res.json({
        data: Details,
        success: true,
        error: false,
        message: "Approve Partner Details fetched successfully!",
      });
    }
  );
}

// --------------------------------------Speaker Form data---------------------------------------------------------
exports.findBySpeaker = function (req, res) {
  Delegatedetails.findBySpeaker(
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
        console.log("avbsbs", Details);
      return res.json({
        data: Details,
        success: true,
        error: false,
        message: "Speaker Details fetched successfully!",
      });
    }
  );
}
// ================Approve-Speaker===================
exports.findByApproveSpeaker = function (req, res) {
  Delegatedetails.findByApproveSpeaker(
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
        console.log("avbsbs", Details);
      return res.json({
        data: Details,
        success: true,
        error: false,
        message: "Approve Speaker Details fetched successfully!",
      });
    }
  );
}
// -------------------------------------------------------------------------------------------------------------------------------
exports.update_approve = function (req, res) {
  console.log(req.params.user_id);
  Delegatedetails.update_approve(req.params.user_id, function (err, details) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        error: true,
        message: "Something went wrong. Please try again.",

      });
    }
    else {
      return res.json({
        success: true,
        error: false,
        message: " Form Details Apporove Successfully!",
      });
    }
  });
}

// ---------------------------------------------------------------------------------------------------------------------------
exports.update_unapprove = function (req, res) {
  console.log(req.params.user_id);
  Delegatedetails.update_unapprove(req.params.user_id, function (err, details) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        status: false,
        error: true,
        message: "Something went wrong. Please try again.",

      });
    }
    else {
      return res.json({
        success: true,
        error: false,
        message: " Form Details  Unapporove Successfully!",
      });
    }
  });
}

// --------------------------------------------Update All Status-----------------------------------------------------------------

exports.update_status= function (req, res) {
  const userIDs = req.body.user_id; // Example user IDs
  const statusType = req.body.status;   // Assuming 1 represents 'Approve'

  Delegatedetails.update_status(userIDs, statusType, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    return res.json({ message: 'Status Updated Successfully', results });
  });
}
// --------------------------------------------------------------------------------------------------------------
    // exports.delete = function (req, res) {
    //   Delegatedetails.delete(req.params.form_id, function (err, role) {
    //     if (err) {
    //       console.log(err);
    //       return res.status(400).json({
    //         status: false,
    //         error: true,
    //         message: "Something went wrong. Please try again.",
    //       });
    //     } else if (!role || !Array.isArray(role) || role.length === 0 || !role[0][0] || role[0][0].response !== "fail") {
    //       return res.status(404).send({
    //         success: false,
    //         error: true,
    //         message: "This Delegatedetails does not exist with this id!",
    //       });
    //     } else {
    //       return res.json({
    //         success: true,
    //         error: false,
    //         message: "Delegatedetails deleted successfully!",
    //       });
    //     }
    //   });
    // };