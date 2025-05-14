import React, { useEffect, useId, useState } from "react";
import TodoInput from "./TodoInput";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load todos from localStorage only once on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever `todos` state changes
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      title,
      description,
      dueDate: date,
      status: "Active",
    };

    // Add the new todo and clear inputs
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "Active" ? "Completed" : "Active",
            }
          : todo
      )
    );
  };

  const filteredTodos =
    filter === "All" ? todos : todos.filter((todo) => todo.status === filter);

  console.log(filteredTodos, "filteredTodos");
  return (
    <div>
      <div>
        <FilterBar setFilter={setFilter} filter={filter} />
        <TodoInput
          title={title}
          setTitle={setTitle}
          setDescription={setDescription}
          description={description}
          date={date}
          setDate={setDate}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={filteredTodos}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
}
