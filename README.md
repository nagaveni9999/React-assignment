import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskManager from './components/TaskManager';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/new-task" element={<NewTaskForm />} />
        <Route path="/my-tasklist" element={<TaskList />} />
       </Routes>
    </Router>
  
  );
};

export default App;

