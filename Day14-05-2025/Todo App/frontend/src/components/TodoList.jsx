import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onToggleStatus }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}
