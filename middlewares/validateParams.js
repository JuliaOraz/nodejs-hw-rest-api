const { HttpError } = require("../helpers");

const validateParams = (schema) => {
  const func = (req, res, next) => {
    console.log(req.params.contactId);
    const { error } = schema.validate(req.params.contactId);

    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateParams;
