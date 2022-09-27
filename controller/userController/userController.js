const userUtils = require("./userUtils")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
  const user = await userUtils.getUserList();
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // try {

  //     console.log("header toekn is ==",req.header("Authorization"))

  //     const token = req.header("Authorization");
  //     // print("header toekn is ==",req.header)


  //     const verified = jwt.verify(token, jwtSecretKey);
  //     if(verified){
  //         return res.send("Successfully Verified");
  //     }else{
  //         // Access Denied
  //         return res.status(401).send(error);
  //     }
  // // } catch (error) {
  // //     // Access Denied
  // //     return res.status(401).send(error);
  // // }

  res.send(user);
}

const createUser = async (req, res) => {
  try {
    console.log("Body here ====  is === ", req.body);
    const checkEmail = await userUtils.getUserByEmail(req.body.email);
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

const loginUser = async (req, res) => {
  console.log("Login user with body ", req.body);
  const response = await userUtils.getUserByEmail(req.body.email, req.body.password);
  if (!response) {
    return res.status(400).json({
      error: "Email address not found"
    })
  }
  console.log("check Password == ", req.body.password);

  console.log("hash Password == ", response.password);
  
  await bcrypt.compare(req.body.password, response.password, function (err, result) {
    if (err) { throw (err); }
    console.log(result);

    return result

  });

  // console.log("isPassword Match ====",isPasswordMatch);
  // if (!isPasswordMatch) {
    
  //   return res.status(400).json({
  //     error: "Password is invalid"
  //   })
  // }

  res.send({
    message: "Login Successfull",
    token: jwt.sign({ email: response.email, fullName: response.name, _id: response._id }, 'RESTFULAPIs')
  });


  // res.send(response);

}

exports.profile = function (req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  }
  else {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
module.exports = {
  getUsers,
  createUser,
  loginUser

};



