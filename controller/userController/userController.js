const userUtils = require("./userUtils")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Get User's Listing For TEST
const getUsers = async (req, res) => {
  const user = await userUtils.getUserList();
  if (!user) {
    return res.status(400).json({
      error: "Users not found"
    })
  }
  res.send(user);
}

//Create User SIGNUP 
const createUser = async (req, res) => {
  try {
    console.log("Body is === ", req.body);
    const checkEmail = await userUtils.getUserByEmail(req.body.email);

    //Check Email if it is already used 
    if (checkEmail) {
      return res.status(400).json({
        error: "Email id is already resigtered"
      })
    }

    const response = await userUtils.createUser(req.body);
    if (!response) {
      throw new ApiError(httpStatus.NOT_FOUND, response);
    }
    res.send(response);

  }
  catch (e) {
    return res.status(400).json({
      error: e
    })
  }

}

//Login User and send JWT token here 
const loginUser = async (req, res) => {
  console.log("Login user with body ", req.body);
  const response = await userUtils.getUserByEmail(req.body.email, req.body.password);

  //Check if email is registered 
  if (!response) {
    return res.status(400).json({
      error: "Email address is not registered"
    })
  }

  //If Exists check Password with hash type and coming password
  const isPasswordMatch = await bcrypt.compare(req.body.password, response.password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      error: "Password is invalid"
    })
  }

  res.send({
    message: "Login Successfull",
    token: jwt.sign({ email: response.email, fullName: response.name, _id: response._id }, 'RESTFULAPIs')
  });

}

//Get Doctors Listing with Specficiation type
const getDoctorsListing = async (req, res) => {
  const user = await userUtils.getSpecficiationListing(req.body.specification);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Doctors not found');
  }
  res.send(user);
}

module.exports = {
  getUsers,
  createUser,
  loginUser,
  getDoctorsListing

};



