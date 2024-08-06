const {connect2db} = require("../config/db");

const getUserCollection = () => {
  return connect2db().then((db) => db.collection("Admins"));
};

module.exports = getUserCollection;
