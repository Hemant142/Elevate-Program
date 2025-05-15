const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");

let fs = require("fs");
const authRoute = express.Router();

const dataPath = path.join(__dirname, "../data/users.json");

const gernateToken = (userID) => {
  console.log(userID, "userID");
  return jwt.sign({ id: userID }, process.env.JWT_SECRETKEY, {
    expiresIn: "1h",
  });
};

// <====================Sign UP===============================>
authRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(401).send("Please  fill the fields");
  }
  fs.readFile(dataPath, "utf8", async function (err, data) {
    let users = [];
    if (!err && data) {
      try {
        users = JSON.parse(data);
      } catch (error) {
        return res.status(500).send("Error parsing user data.");
      }
    }
    // Hash the password

    let userExisit = users.find((ele) => ele.email == email);
    console.log(userExisit, "User Exists");
    if (userExisit) {
      return res.status(400).send("User Exisits");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
    };
    users.push(newUser);

    fs.writeFile(
      dataPath,
      JSON.stringify(users, null, 2),

      function (err) {
        if (err) {
          return res.status(500).send("Error saving user.", err);
        }
        return res.status(200).json({ message: "User saved", user: newUser });
      }
    );
  });
});

authRoute.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    fs.readFile(dataPath, "utf8", async (err, data) => {
      let users = [];
      if (!err && data) {
        try {
          users = JSON.parse(data);
        } catch (error) {
          return res.status(500).send("Error parsing user data.");
        }
      }

      let userExisits = users.find((ele) => ele.email === email);
      if (!userExisits) {
        return res
          .status(400)
          .send({ message: "You are not register please sign up first" });
      }
      let verify = await bcrypt.compare(password, userExisits.password);
      if (!verify) {
        return res.status(400).send("Please check the password");
      }

      let token = gernateToken(userExisits.id);
      if (verify) {
        res
          .status(200)
          .send({ message: "Login Successful", user: userExisits, token });
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = { authRoute };
