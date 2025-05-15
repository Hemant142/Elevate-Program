const { notesRoutes } = require("./Routes/notesRoutes");
const { authRoute } = require("./Routes/userRoutes");
const cors = require("cors");
express = require("express");
dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send(`Welcome to Elvate program backend Day 13-05-2025`);
});
app.use("/api/auth", authRoute);
app.use("/api/notes", notesRoutes);

let port = process.env.PORT;

app.listen(port, () => {
  try {
    console.log(`port is running at http://localhost:${port}`);
  } catch (error) {
    console.log(error, "Index.js Error");
  }
});
