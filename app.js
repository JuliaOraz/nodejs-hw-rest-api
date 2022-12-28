const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { authenticate } = require("./middlewares");

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/contacts", authenticate, contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server" } = err;
  res.status(status).json({ message });
});

module.exports = app;
