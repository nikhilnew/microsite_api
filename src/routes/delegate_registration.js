const express = require("express");
const router = express.Router();
const delegate_registration = require("../controllers/delegate_registration");

// Apply token authentication middleware to all routes
// Retrieve all leaves
router.get("/getAll", delegate_registration.findAll);

// Create a new leaves
router.post("/create", delegate_registration.Delegatedetails);

// // Get All Non-Registered & Approved Data in Delegate Form
router.get("/delegate/non-registered", delegate_registration.findById);
router.get("/delegate/approved", delegate_registration.findByApproved);

// // Get All Non-Registered & Approved Data in Partner Form
router.get("/partner/non-registered", delegate_registration.findByPartner);
router.get("/partner/approved", delegate_registration.findByApprovePartner);

// // Get All Non-Registered & Approved Data in Speaker Form
router.get("/speaker/non-registered", delegate_registration.findBySpeaker);
router.get("/speaker/approved", delegate_registration.findByApproveSpeaker);

// // Update a departmentdetails with id
router.put("/approve/:user_id", delegate_registration.update_approve);

router.get('/status', delegate_registration.update_status);

// // Update a departmentdetails with id
router.put("/unapprove/:user_id", delegate_registration.update_unapprove);

// // Delete a leave with id
// router.patch("/:form_id", delegate_registration.delete);


module.exports = router;
