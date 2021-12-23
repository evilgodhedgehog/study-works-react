import React from 'react';
import Button from './UI/button/Button';
import Checkbox from './UI/checkbox/Checkbox';

const TaskItem = (props) => {
    return (
        <div className='task'>
            <button className='task-button' onClick={() => props.remove(props.task)}>
                <Checkbox />
            </button>
            <div className='task-body'>
                <div className="task-body__title">{props.task.title}</div>
                <div className="task-body__description">{props.task.description}</div>
                <div className="task-body__date">{props.task.date}</div>
            </div>
            <div className="task-list-actions">
                <Button type="button" aria-label="Изменить">
                    <svg width="24" height="24">
                        <g fill="none">
                            <path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"></path>
                            <path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 
                            00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 
                            0 00-2.13 0L4.42 16.02z"></path>
                        </g>
                    </svg>
                </Button>
                <Button className="task-list-actions__more" type="button" aria-label="Действия в задаче">
                    <svg width="15" height="3">
                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 
                        3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor"></path>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default TaskItem;