const moment = require("moment");

const time = (req, res, next) => {
  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  next();
};

module.exports = time;
