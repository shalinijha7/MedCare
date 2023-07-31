const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//Routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || Post
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Delete Notification  || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//Get All Doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//Book Appointments
router.post("/book-appointment", authMiddleware, bookAppointmentController);


//Booking Availability
router.post("/booking-availability",authMiddleware,bookingAvailabilityController)

//Appointments List
router.get("/user-appointments",authMiddleware,userAppointmentsController)

module.exports = router;
