//libraries
import React from 'react';
//Style
import classes from './MyInput.module.css'


const MyInput = /*React.forwardRef (*/(props, /*ref*/) => {
    return (
        <input /*ref={ref}*/ className={classes.myInput} {...props}/>
    );
}/*)*/;

export default MyInput;