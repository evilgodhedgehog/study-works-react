import React, { useRef, useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList';
import Button from './components/UI/button/Button';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Javascript', description: 'Description', date: '21 дек. , 22.36'},
    {id: 2, title: 'React.js', description: 'Description', date: '20 дек. , 14.36'},
    {id: 3, title: '.NET', description: 'Description', date: '19 дек. , 19.36'},
  ])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(p => p.id !== task.id))
  }

  const [formIsVisible, setFormIsVisible] = useState(false);
 
  return (
    <div className='app'>
      <header></header>
      <main>
        <TaskList remove={removeTask} tasks={tasks}/>
        <Button onClick={() => setFormIsVisible(true)} visible={!formIsVisible} setVisible={setFormIsVisible}>
          <span className="icon_add" aria-hidden="true">
            <svg width="13" height="13">
              <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 
              0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor"></path>
            </svg>
          </span> 
          Добавить задачу
        </Button>
        <TaskForm create={createTask} visible={formIsVisible} setVisible={setFormIsVisible}/>
      </main>
    </div>
  );
}

export default App;
