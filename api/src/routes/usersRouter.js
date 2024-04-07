const { Router } = require("express");
const {
  loginHandler,
  createUserHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/", loginHandler);
usersRouter.post("/", createUserHandler);

module.exports = usersRouter;
