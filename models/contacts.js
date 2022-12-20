const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const contactsShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactsShema.post("save", handleMongooseError);

const Contact = model("contact", contactsShema);

module.exports = {
  Contact,
};
