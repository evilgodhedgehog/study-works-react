import React, {useState} from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';
import Textarea from './UI/textarea/Textarea';

const TaskForm = ({create}) => {

    const [task, setTask] = useState({title: '', description: ''});
    const locale = 'ru';
    const today = new Date();
    const date = `${today.getDate()} ${today.toLocaleDateString(locale, { month: 'short' })}\n`;  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour24: true, minute: 'numeric' });
  
    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task, id: Date.now(), date: [date, ', ', time]
        }
        create(newTask);
        setTask({title: '', description: ''});
    }

    return (
      <form className='add-task-form'>
        <Input 
          value={task.title} 
          onChange={e => setTask({...task, title: e. target.value})} 
          type='text' 
          placeholder='Заголовок задачи'
        />
        <Textarea 
          value={task.description} 
          onChange={e => setTask({...task, description: e. target.value})} 
          type='text' 
          placeholder='Описание задачи'
        />
        <Button onClick={addNewTask}>Создать задачу</Button>  
        <Button>Отмена</Button>  
      </form>
    );
};

export default TaskForm;