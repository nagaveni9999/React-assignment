const taskService = {
    addTask: (task) => {
      let tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
      tasks.push(task);
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    getTasks: () => {
      return JSON.parse(window.localStorage.getItem("tasks")) || [];
    },
    updateTasks: (tasks) => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
      },
   
  };
   
  export default taskService;