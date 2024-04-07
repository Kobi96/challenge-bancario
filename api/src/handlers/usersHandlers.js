const { createUser, login } = require("../controllers/usersControllers");

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginHandler, createUserHandler };
