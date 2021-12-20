import React from 'react';
import Checkbox from './UI/checkbox/Checkbox';

const TaskItem = (props) => {
    return (
        <div className='task'>
            <Checkbox onClick={() => props.remove(props.task)}/>
            <div className='task-body'>
                <div className="task-body__title">{props.index}. {props.task.title}</div>
                <div className="task-body__description">{props.task.description}</div>
                <div className="task__date">{props.task.date}</div>
            </div>
            <button onClick={() => props.remove(props.task)}></button>
        </div>
    );
};

export default TaskItem;