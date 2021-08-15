//libraries
import React from 'react';
//Components

//Styles
import classes from './MyModal.module.css';

const MyModal = ({children, visible, setvisible}) => {
    const rootClasses = [classes.myModal];
    if(visible){
        rootClasses.push(classes.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setvisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;