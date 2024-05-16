import React, { useState } from "react";
import "./NewTaskForm.css";
import taskService from "./TaskService";

const NewTaskForm = ({ onClose }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(), 
      title: taskTitle,
      completed: false, 
    };
    taskService.addTask(newTask); 
    setTaskTitle("");
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  return (
    <div className="newTaskCard">
      <div className="newTaskPage">
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="task-input"
          />
          <button type="submit" className="add-task-button">
            Add Task
          </button>
        </form>
        <button onClick={onClose} className="close-button">
          Close
        </button>
        {showSuccessMessage && (
          <p className="success-message">Task added successfully!</p>
        )}
      </div>
    </div>
  );
};

export default NewTaskForm;
