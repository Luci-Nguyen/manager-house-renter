const db = require("./db");

exports.createUser = async (name, email, hashedPassword) => {
  const [result] = await db.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
  return result;
};

exports.findUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

exports.findUserById = async (id) => {
  const [rows] = await db.execute("SELECT id, name, email FROM users WHERE id = ?", [id]);
  return rows[0];
};
