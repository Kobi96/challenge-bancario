const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  res.status(200).send("Estoy en posts");
});
postsRouter.get("/:id", (req, res) => {
  res.status(200).send("Estoy viendo a un post en particular");
});
postsRouter.post("/", (req, res) => {
  res.status(201).send("Voy a hacer un post");
});

module.exports = postsRouter;
