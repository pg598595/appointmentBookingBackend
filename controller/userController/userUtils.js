const User = require('../../model/userModel');


const createUser = async (userBody) => {


    //   if (await User.isEmailTaken(userBody.email)) {
    //     console.log("Error in email address")
    //     throw "error";
    // }
    return User.create(userBody);
};

const getUserByEmail = async (email) => {
    return User.findOne({ email });
  };

const getUserList = async () => {
    return User.find()
};

module.exports = {
    createUser,
    getUserList,
    getUserByEmail,
};
