const express = require('express');
const userController = require('./userController')
const router = express.Router();

//Get users list
router.get('/getUsers', userController.getUsers);

//Sign up or Create User
router.post('/create', userController.createUser);

//Login User
router.post('/login', userController.loginUser);

//Get Doctor List
router.post("/list", userController.getDoctorsListing);



module.exports = router;