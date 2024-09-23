const mongoose = require("mongoose");
const { db } = require("../configuration");

module.exports.connectDb = () => {
  mongoose.connect(db);

  return mongoose.connection;
};
