import React, {useState} from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

const TaskForm = ({create}) => {

    const [task, setTask] = useState({title: '', description: ''});
    
    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task, id: Date.now(), date: Date.now()
        }
        create(newTask);
        setTask({title: '', description: ''});
    }

    return (
        <form>
        <Input 
          value={task.title} 
          onChange={e => setTask({...task, title: e. target.value})} 
          type='text' 
          placeholder='Заголовок задачи'
        />
        <Input 
          value={task.description} 
          onChange={e => setTask({...task, description: e. target.value})} 
          type='text' 
          placeholder='Описание задачи'
        />
        <Button onClick={addNewTask}>Создать задачу</Button>  
      </form>
    );
};

export default TaskForm;