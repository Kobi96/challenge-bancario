const { Router } = require("express");
const {
  getPosts,
  getPostsById,
  createPosts,
} = require("../handlers/postsHandlers");

const postsRouter = Router();

postsRouter.get("/", getPosts);

postsRouter.get("/:id", getPostsById);

postsRouter.post("/", createPosts);

module.exports = postsRouter;
