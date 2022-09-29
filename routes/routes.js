const express = require('express');
const users = require('../controller/userController/userRoutes');
const appointment = require('../controller/appointmentController/appointmentRoutes');

const router = express.Router();

router.use('/users',users);
router.use('/appointment',appointment);
module.exports = router;