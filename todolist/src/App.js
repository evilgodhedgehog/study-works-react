import React, { useRef, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Javascript', description: 'Description', date: '21 дек. , 22.36'},
])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(p => p.id !== task.id))
  }
  
  return (
    <div className='app'>
      <TaskList remove={removeTask} tasks={tasks}/>
      <TaskForm create={createTask}/>
    </div>
  );
}

export default App;
