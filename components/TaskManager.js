import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./TaskManager.css";
import NewTaskForm from "./NewTaskForm";
import { Link } from "react-router-dom";
const TaskManager = () => {
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  return (
    <div className="task-manager-container">
      <div className="header-container">
        <h1>Task Management</h1>
        <button
          onClick={() => setShowNewTaskForm(true)}
          className="add-task-button"
        >
          <FaPlus />
        </button>
      </div>
      <main>
       
        <Link to="/my-tasklist" className="my-tasks-link">
          <h2>My Tasks</h2>
        </Link>
      </main>
      {showNewTaskForm && (
        <div className="new-task-form-popup">
          <NewTaskForm onClose={() => setShowNewTaskForm(false)}  />
        </div>
      )}
    </div>
  );
};

export default TaskManager;


