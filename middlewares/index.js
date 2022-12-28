const { validateBody, validateBodyFavorite } = require("./validateBody");
const validateParams = require("./validateParams");
const authenticate = require("../middlewares/authenticate");

module.exports = {
  validateBody,
  validateParams,
  validateBodyFavorite,
  authenticate,
};
