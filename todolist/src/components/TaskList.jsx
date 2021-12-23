import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks, remove}) => {
    return (
        <div>
            <div className='task-list__title'>Входящие</div>
            {tasks.map(((task) => 
                <TaskItem remove={remove} task={task} key={task.id}/>
             ))}
        </div>
    );
};

export default TaskList;