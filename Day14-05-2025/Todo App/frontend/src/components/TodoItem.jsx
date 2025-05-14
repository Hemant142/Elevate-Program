import React from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, onDelete, onToggleStatus }) {
  return (
    <div
      className={`todo-item ${todo.status === "Completed" ? "completed" : ""}`}
    >
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>
          <strong>Due:</strong> {todo.dueDate}
        </p>
        <p>
          <strong>Status:</strong> {todo.status}
        </p>
      </div>
      <div className="todo-actions">
        <button onClick={() => onToggleStatus(todo.id)}>
          {todo.status === "Active" ? "Mark Completed" : "Mark Active"}
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
