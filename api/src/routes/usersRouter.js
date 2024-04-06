const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).send("Estoy en users");
});
usersRouter.get("/:id", (req, res) => {
  res.status(200).send("Estoy viendo a un usuario en particular");
});

module.exports = usersRouter;
