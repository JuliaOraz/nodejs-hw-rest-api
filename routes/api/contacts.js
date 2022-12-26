const express = require("express");

const controller = require("../../controllers/contacts");

const { controllerWrapp } = require("../../helpers");

const authenticate = require("../../middlewares/authenticate");

const {
  validateBody,
  validateParams,
  validateBodyFavorite,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, controllerWrapp(controller.listContacts));

router.get(
  "/:contactId",
  authenticate,
  validateParams(schemas.paramsSchema),
  controllerWrapp(controller.getContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllerWrapp(controller.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  validateParams(schemas.paramsSchema),
  controllerWrapp(controller.removeContact)
);

router.put(
  "/:contactId",
  authenticate,
  validateParams(schemas.paramsSchema),
  validateBody(schemas.addSchema),
  controllerWrapp(controller.updateContactById)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  validateParams(schemas.paramsSchema),
  validateBodyFavorite(schemas.updateFavoriteSchema),
  controllerWrapp(controller.updateStatusContact)
);

module.exports = router;
