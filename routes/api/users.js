const express = require("express");

const controller = require("../../controllers/users");

const { controllerWrapp } = require("../../helpers");

const {
  validateBody,
  authenticate,
  uploadAvatar,
} = require("../../middlewares");

const schemas = require("../../schemas/auth");

const router = express.Router();

router.get("/current", authenticate, controllerWrapp(controller.getCurrent));

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  controllerWrapp(controller.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  uploadAvatar.single("avatar"),
  controllerWrapp(controller.updateAvatar)
);

module.exports = router;
