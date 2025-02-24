const express = require("express");

const controller = require("../../controllers/auth");

const { controllerWrapp } = require("../../helpers");

const { validateBody, authenticate } = require("../../middlewares");

const schemas = require("../../schemas/auth");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  controllerWrapp(controller.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  controllerWrapp(controller.login)
);

router.get("/logout", authenticate, controllerWrapp(controller.logout));

router.get(
  "/verify/:verificationToken",
  controllerWrapp(controller.verifyEmail)
);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  controllerWrapp(controller.resendVerifyEmail)
);

module.exports = router;
