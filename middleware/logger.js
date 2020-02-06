const logger = (req, res, next) => {
  console.log(`hello logger`);
  next();
};

module.exports = logger;
