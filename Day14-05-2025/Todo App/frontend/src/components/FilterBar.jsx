import React from "react";
import "./FilterBar.css";

export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={filter === "Active" ? "active" : ""}
        onClick={() => setFilter("Active")}
      >
        Active
      </button>
      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
    </div>
  );
}
