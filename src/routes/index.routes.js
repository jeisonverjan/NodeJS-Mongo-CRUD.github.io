import { Router } from "express";
import {
  renderTasks,
  editTask,
  editTaskPost,
  deleteTask,
  createTask,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

// Render tasks
router.get("/", renderTasks);
// Create Task
router.post("/tasks/add", createTask);
// Change task status
router.get("/task/:id/toggleDone", toggleDone);
// Edit Task
router.get("/task/:id/edit", editTask);
// Edit Task Post
router.post("/task/:id/edit", editTaskPost);
// Delete Task
router.get("/task/:id/delete", deleteTask);

/*  */
export default router;
