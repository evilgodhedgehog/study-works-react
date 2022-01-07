import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks, remove}) => {

    if(!tasks.length){
        return (
            <h2 style={{textAlign: 'center', marginBottom: '15px'}}>
                Список задач пуст
            </h2>
        )
    }

    return (
        <div>
            <div className='task-list__title'>Задачи</div>
            {tasks.map(((task) => 
                <TaskItem remove={remove} task={task} key={task.id}/>
             ))}
        </div>
    );
};

export default TaskList;