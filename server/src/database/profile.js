const database = require("../../configurations/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register(email, password) {
  try {
    const hash = await bcrypt.hash(password, 12);
    const data = await database("user").insert({
      email: email,
      password: hash,
    });
    return { error: false, data: data };
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return { error: true, message: "User already exists" };
    } else {
      return { error: true, message: "System failure in database/register" };
    }
  }
}

async function login(email, password) {
  try {
    const data = await database("user")
      .where({ email: email })
      .select("email", "password");
    if (data.length === 0) {
      return { error: true, message: "Incorrect email or password" };
    }
    const isCorrectPassword = await bcrypt.compare(password, data[0].password);
    if (!isCorrectPassword) {
      return { error: true, message: "Incorrect email or password" };
    }
    const user = { email: data[0].email };
    if (isCorrectPassword) {
      const userJwt = await jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: 86400,
      });
      return { error: false, data: userJwt };
    }
  } catch (error) {
    return { error: true, message: "System failure in database/login" };
  }
}

(async () => {
  const countries = await login("bob@gmail.com", "password");
  console.log(countries);
})();

module.exports = {
  register: register,
  login: login,
};
