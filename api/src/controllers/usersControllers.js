const { user } = require("../db");
const { hashPassword, checkPassword } = require("../assets/passwordFunctions");
const bcrypt = require("bcrypt");

const createUser = async (name, email, password) => {
  const hash = await hashPassword(password);
  const newUser = await user.create({ name, email, password: hash });
  return newUser;
};

const login = async (email, password) => {
  const dbUser = await user.findOne({ email });

  if (!dbUser) {
    throw new Error("Usuario no encontrado");
  }

  const passwordMatch = await bcrypt.compare(password, dbUser.password);

  if (!passwordMatch) {
    throw new Error("Contraseña incorrecta");
  }

  return dbUser;
};
module.exports = { createUser, login };
