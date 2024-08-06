const getUserCollection = require("../../models/authModel");

const bcrypt = require('bcrypt');

const createUser = async (user) => {
    if(user && user.email && user.password){
      const collection = await getUserCollection();
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashedPassword;
      const result = await collection.insertOne(user);
      return result.insertedId;
    }
    else return "";
};

const getAllAdmins = () => {
  return getUserCollection()
  .then((collection)=>{
   return collection.findOne({});
  })
};

const getAdmin = (gmail ) =>{
  return getUserCollection()
  .then((collection)=>{
    return collection.findOne({email : gmail});
  })
}

module.exports = { createUser, getAllAdmins  , getAdmin};
