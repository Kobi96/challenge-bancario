const getUsersHandler = (req, res) => {
  res.status(200).send("Estoy en users");
};
const getUsersByIdHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Estoy viendo al detalle del usuario ${id}`);
};
const createUsers = (req, res) => {
  const { name, email, password } = req.body;

  res.status(200).send(`Estoy creando un usuario con los siguientes parametros:
  name: ${name},
  email: ${email},
  password: ${password}`);
};

module.exports = { getUsersByIdHandler, getUsersHandler, createUsers };
