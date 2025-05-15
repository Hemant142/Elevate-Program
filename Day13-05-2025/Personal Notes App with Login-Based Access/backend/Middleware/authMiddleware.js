const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
dotenv.config();
const verification = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const dataPath = path.join(__dirname, "../data/users.json");

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).send({ message: "No Token is being provided" });
  }
  try {
    let token = authHeader.split(" ")[1];

    let decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    req.userID = decoded.id;

    fs.readFile(dataPath, "utf8", async (err, data) => {
      let users = [];
      if (!err && data) {
        try {
          users = JSON.parse(data);
        } catch (error) {
          return res.status(500).send("Error parsing user data.");
        }
      }

      let userExisits = users.find((ele) => ele.id === decoded.id);

      if (!userExisits) {
        return res
          .status(400)
          .send("You are not register please sign up first");
      }
      next();
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { verification };
