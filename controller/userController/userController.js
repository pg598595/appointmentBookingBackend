const userUtils = require("./userUtils")

const getUsers = async (req, res) => {
    const user = await userUtils.getUserList();
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    res.send(user);
  }

  const createUser = async (req, res) => {

    console.log("Body here ====  is === ",req.body);


    const response = await userUtils.createUser(req.body);
    if (!response) {
      throw new ApiError(httpStatus.NOT_FOUND, response);
    }
    res.send(response);
  } 

  module.exports = {
    getUsers,
    createUser
  
  };
  


  