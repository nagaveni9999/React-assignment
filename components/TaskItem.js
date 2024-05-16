
import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
