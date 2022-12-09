const express = require("express");

const ctrl = require("../../controllers/contacts");

const { ctrlWrapp } = require("../../helpers");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapp(ctrl.listContacts));

router.get("/:contactId", ctrlWrapp(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapp(ctrl.addContact));

router.delete("/:contactId", ctrlWrapp(ctrl.removeContact));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapp(ctrl.updateContactById)
);

module.exports = router;
