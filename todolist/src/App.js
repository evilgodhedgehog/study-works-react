import React, { useRef, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Javascript', description: 'Description'},
])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(p => p.id !== task.id))
  }
  
  return (
    <div className='app'>
      <TaskForm create={createTask}/>
      <TaskList remove={removeTask} tasks={tasks}/>
    </div>
  );
}

export default App;
