import React, { useState } from "react";
import './TaskBoard.css';
const categories = ["All", "Work", "Personal", "Learning"];
export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTitle("");
    setCategory("Work");
  };

  const clearCompleted=()=>{
setTasks(tasks.filter(task=>!task.completed))
  }
  const toggleComplete=(id)=>{
setTasks(tasks.map(task=>
    task.id===id?{...task,completed:!task.completed}:task
))
  }
  const deleteTask=(id)=>{
setTasks(tasks.filter(task=>task.id!==id))
  }
console.log(tasks,"Tasks")
  const filteredTasks=filter==='All'?tasks:tasks.filter(task=>task.category==filter);
  const remaining =tasks.filter(task=>!task.completed).length
  return (
    <div classname="task-board">
      <h1>Task Management Board</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
    <div className="filter-section">
        <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            {categories.map(cat=>(
                <option key={cat}>{cat}</option>
            ))}
        </select>
        <button onClick={clearCompleted} >Clear Completed</button>
    </div>

 <p className="remaining">Remaining Tasks: <strong>{remaining}</strong></p>
<ul className="task-list" >
    {filteredTasks.map(task=>(
        <li
        key={task.id}
      className={task.completed ? 'completed' : ''}
        >
            <label>
                <input
                type="checkbox"
                checked={task.completed}
                onChange={()=>toggleComplete(task.id)}
                />
                {task.title}<span className="category">({task.category})</span>
            </label>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>🗑</button>

        </li>
    ))}

</ul>
    </div>
  );
}
