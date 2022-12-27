const express = require("express");

const controller = require("../../controllers/users");

const { controllerWrapp } = require("../../helpers");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/auth");

const router = express.Router();

router.get("/current", controllerWrapp(controller.getCurrent));

router.patch(
  "/",
  validateBody(schemas.subscriptionSchema),
  controllerWrapp(controller.updateSubscription)
);

module.exports = router;
