import React from 'react';
import classes from './Textarea.module.css';

const Textarea = React.forwardRef((props , ref) => {
    return (
        <textarea ref={ref} className={classes.textarea} {...props}/>
    );
});

export default Textarea;