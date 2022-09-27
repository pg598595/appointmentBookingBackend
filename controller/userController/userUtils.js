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

const getSpecficiationListing = async (specification) => {
  console.log("specification===",specification)
  return User.find({ specification });
};


module.exports = {
    createUser,
    getUserList,
    getUserByEmail,
    getSpecficiationListing
};
