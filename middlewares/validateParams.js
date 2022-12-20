const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const validateParams = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.params);
    const { contactId } = req.params;

    if (error) {
      next(HttpError(400, error.message));
    }
    if (!isValidObjectId(contactId)) {
      next(HttpError(404, "Invalid id"));
    }
    next();
  };

  return func;
};

module.exports = validateParams;
