import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";

import taskRouter from "./Routes/TaskRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO THE API todo 06-05-2025");
});
// Connect to MongoDB

// Routes
app.use("/api/tasks", taskRouter);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
