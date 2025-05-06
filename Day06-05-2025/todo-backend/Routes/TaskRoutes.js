import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../Controller/TaskController.js";
import e from "express";

let taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.get("/", getTasks);

taskRouter.get("/:id", getTaskById);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
