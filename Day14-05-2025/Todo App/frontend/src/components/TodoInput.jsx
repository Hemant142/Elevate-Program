import React from "react";
import "./TodoInput.css";

export default function TodoInput({
  title,
  date,
  setTitle,
  setDate,
  setDescription,
  description,
  handleAddTodo,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add New Todo</h2>

      <label className="form-label">Title</label>
      <input
        type="text"
        value={title}
        placeholder="Enter title..."
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
        required
      />

      <label className="form-label">Description</label>
      <textarea
        value={description}
        placeholder="Enter description..."
        onChange={(e) => setDescription(e.target.value)}
        className="form-textarea"
        required
      />

      <label className="form-label">Due Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
        required
      />

      <button type="submit" className="form-button">
        Add Todo
      </button>
    </form>
  );
}
