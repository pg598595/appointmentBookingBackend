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

  const loginUser = async (req,res)=>{
    console.log("Login user with body ",req.body);
    const response = await userUtils.getUserByEmail(req.body.email,req.body.password);
    if(!response){
        res.status(400).json({
            error:"Email or password not found"
        })
    }
    res.send(response);
  }

  module.exports = {
    getUsers,
    createUser,
    loginUser
  
  };
  


  