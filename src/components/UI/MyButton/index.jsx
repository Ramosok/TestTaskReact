//libraries
import React from "react";
//Styles
import classes from './MyButton.module.css';
//Components


const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
}

export default MyButton;
