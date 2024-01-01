const errorHandler = (func) => {
  return async (req, res, next) => {
    try {
      return await func(req, res);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = { errorHandler };
