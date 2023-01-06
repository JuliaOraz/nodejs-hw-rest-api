const { validateBody, validateBodyFavorite } = require("./validateBody");
const validateParams = require("./validateParams");
const authenticate = require("./authenticate");
const uploadAvatar = require("./uploadAvatar");

module.exports = {
  validateBody,
  validateParams,
  validateBodyFavorite,
  authenticate,
  uploadAvatar,
};
