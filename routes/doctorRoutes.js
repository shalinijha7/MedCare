const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//Post single doctor information
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//Post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//Post get single doctor information
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//Get Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//Post update status
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
