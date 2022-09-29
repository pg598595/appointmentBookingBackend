const express = require('express');
const appointmentController = require('./appointmentController')
const router = express.Router();

router.post('/createAppointment', appointmentController.createAppointment);
router.put('/modifyAppointment', appointmentController.modifyAppointment);
router.put('/cancelAppointment', appointmentController.cancelAppointment);

module.exports = router;