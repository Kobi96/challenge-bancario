const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    console.error("Error al hashear la password:", error);
    throw error;
  }
}

async function checkPassword(password, hash) {
  try {
    const coincidencia = await bcrypt.compare(password, hash);
    return coincidencia;
  } catch (error) {
    console.error("Error al checkear la password:", error);
    throw error;
  }
}

module.exports = { hashPassword, checkPassword };
