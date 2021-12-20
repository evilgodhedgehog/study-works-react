import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks, remove}) => {
    return (
        <div>
            {tasks.map(((task , index) => 
                <TaskItem remove={remove} index={index + 1} task={task} key={task.id}/>
             ))}
        </div>
    );
};

export default TaskList;