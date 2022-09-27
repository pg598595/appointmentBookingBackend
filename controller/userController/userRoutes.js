const express = require('express');
const userController = require('./userController')
const router = express.Router();

router.get('/getUsers', userController.getUsers);
router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.post("/list", userController.getDoctorsListing);



module.exports = router;