const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);

module.exports = mainRouter;

/* 
app.get("/users", (req, res) => {
  res.status(200).send("Estoy en users");
});
app.get("/users/:id", (req, res) => {
  res.status(200).send("Estoy viendo a un usuario en particular");
});
app.get("/posts", (req, res) => {
  res.status(200).send("Estoy en posts");
});
app.get("/posts/:id", (req, res) => {
  res.status(200).send("Estoy viendo a un post en particular");
});
app.post("/posts", (req, res) => {
  res.status(201).send("Voy a crear un usuario");
}); */
