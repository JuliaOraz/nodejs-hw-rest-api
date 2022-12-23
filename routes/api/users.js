const express = require("express");

const controller = require("../../controllers/auth");

const { controllerWrapp } = require("../../helpers");

const {
  validateBody,
  validateParams,
  authenticate,
} = require("../../middlewares");

const schemas = require("../../schemas/auth");

const router = express.Router();

// signup
router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  controllerWrapp(controller.register)
);

// signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  controllerWrapp(controller.login)
);

// router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))

// router.post("/logout", authenticate, ctrlWrapper(ctrl.logout))

module.exports = router;
