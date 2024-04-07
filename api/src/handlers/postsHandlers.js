const getPosts = (req, res) => {
  res.status(200).send("Estoy en posts");
};

const getPostsById = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Estoy viendo al detalle del post ${id}`);
};

const createPosts = (req, res) => {
  const { service, amount, date } = req.body;

  res.status(200).send(`Estoy creando un usuario con los siguientes parametros:
  sevice: ${service},
  amount: ${amount},
  date: ${date}`);
};

module.exports = {
  getPosts,
  getPostsById,
  createPosts,
};
