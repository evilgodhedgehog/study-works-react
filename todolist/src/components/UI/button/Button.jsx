import React from 'react';
import cl from './Button.module.css';

const Button = ({children, visible, ...props}) => {

    const classes = [cl.btn];

    if(visible === false){
        classes.push(cl.none)
    }

    return (
        <button {...props} className={classes.join(' ')}>
            {children}
        </button>
    );
};

export default Button