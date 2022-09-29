const express = require('express');
const appointmentController = require('./appointmentController')
const appoitmentList = require('./appoitmentList')

const router = express.Router();

router.post('/createAppointment', appointmentController.createAppointment);
router.put('/modifyAppointment', appointmentController.modifyAppointment);
router.put('/cancelAppointment', appointmentController.cancelAppointment);
router.post('/user/appoitmentList', appoitmentList.getAppointmentListingForUser);
router.post('/doctor/appoitmentList', appoitmentList.getAppointmentListingForDoctor);



module.exports = router;