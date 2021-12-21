import React from 'react';
import Checkbox from './UI/checkbox/Checkbox';

const TaskItem = (props) => {
    return (
        <div className='task'>
            <button className='task-button' onClick={() => props.remove(props.task)}>
                <Checkbox />
            </button>
            <div className='task-body'>
                <div className="task-body__title">{props.index}. {props.task.title}</div>
                <div className="task-body__description">{props.task.description}</div>
                <div className="task-body__date">{props.task.date}</div>
            </div>
        </div>
    );
};

export default TaskItem;