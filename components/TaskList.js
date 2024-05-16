
import React, { useEffect, useState } from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";
import taskService from "./TaskService";
import Filter from "./Filter";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const fetchedTasks = taskService.getTasks();
    setTasks(fetchedTasks);
    setFilteredTasks(fetchedTasks);
  }, []);

  useEffect(() => {
    filterTasks(activeFilter);
  }, [tasks, activeFilter]);

  const filterTasks = (filter) => {
    switch (filter) {
      case "active":
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    taskService.updateTasks(updatedTasks);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    taskService.updateTasks(updatedTasks);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <Filter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => handleDeleteTask(task.id)}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
