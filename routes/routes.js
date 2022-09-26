const express = require('express');
const users = require('../controller/userController/userRoutes')
const router = express.Router();

router.use('/users',users);

module.exports = router;