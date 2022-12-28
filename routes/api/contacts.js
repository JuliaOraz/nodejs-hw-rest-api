const express = require("express");

const controller = require("../../controllers/contacts");

const { controllerWrapp } = require("../../helpers");

const {
  validateBody,
  validateParams,
  validateBodyFavorite,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", controllerWrapp(controller.listContacts));

router.get(
  "/:contactId",
  validateParams(schemas.paramsSchema),
  controllerWrapp(controller.getContactById)
);

router.post(
  "/",
  validateBody(schemas.addSchema),
  controllerWrapp(controller.addContact)
);

router.delete(
  "/:contactId",
  validateParams(schemas.paramsSchema),
  controllerWrapp(controller.removeContact)
);

router.put(
  "/:contactId",
  validateParams(schemas.paramsSchema),
  validateBody(schemas.addSchema),
  controllerWrapp(controller.updateContactById)
);
router.patch(
  "/:contactId/favorite",
  validateParams(schemas.paramsSchema),
  validateBodyFavorite(schemas.updateFavoriteSchema),
  controllerWrapp(controller.updateStatusContact)
);

module.exports = router;
