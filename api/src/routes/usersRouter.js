const { Router } = require("express");
const {
  getUsersByIdHandler,
  getUsersHandler,
  createUsers,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getUsersByIdHandler);
usersRouter.post("/", createUsers);

module.exports = usersRouter;
