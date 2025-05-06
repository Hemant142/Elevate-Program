import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskFrom";
import { fetchTasks, createTask, updateTask, deleteTask } from "./services/api";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const handleCreateOrUpdate = async (taskData) => {
    if (editingTask) {
      const updatedTask = await updateTask(editingTask._id, taskData);
      setTasks((prev) =>
        prev.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      );
    } else {
      const newTask = await createTask(taskData);
      setTasks((prev) => [...prev, newTask]);
    }
    setEditingTask(null);
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks((prev) => prev.filter((task) => task._id !== taskId));
  };

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ my: 4 }}>
          <TaskForm
            onSubmit={handleCreateOrUpdate}
            initialData={editingTask}
            onCancel={() => setEditingTask(null)}
          />
          <TaskList
            tasks={tasks}
            onEdit={(task) => setEditingTask(task)}
            onDelete={handleDelete}
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default App;
