const User = require('../../model/userModel');


const createUser = async (userBody) => {
    return User.create(userBody);
};

const getUserByEmail = async (email) => {
    return User.findOne({ email });
  };

const getUserByPhoneNumber = async (phoneNumber) => {
    return User.findOne({ phoneNumber });
  };

const getUserList = async () => {
    return User.find()
};

module.exports = {
    createUser,
    getUserList,
    getUserByEmail,
};
