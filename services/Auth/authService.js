const getUserCollection = require("../../models/authModel");

const bcrypt = require("bcrypt");

const getAllAdmins = () => {
  return getUserCollection().then((collection) => {
    return collection.findOne({});
  });
};

const getAdmin = (gmail) => {
  return getUserCollection().then((collection) => {
    return collection.findOne({ email: gmail });
  });
};

module.exports = { getAllAdmins, getAdmin };
