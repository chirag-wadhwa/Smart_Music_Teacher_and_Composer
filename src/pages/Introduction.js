import React from 'react';
import Button from '../UI/Button';

import classes from './Introduction.module.css';

const Introduction = (props) => {
    return (
        <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Welcome to this Course!</h2>
        </header>
        <div className={classes.content}>
            <p>Get excited for this amazing and fun journey where you will learn
            how to play a standard keyboard and ultimately compose your own piece of music</p>
            <p>The Interface consists of a keyboard octave, which can be changed from the dropdown above it. This journey consists of 4 lessons. You can select the lessons from the bottom of the page</p>
        </div>
        <div className={classes.bottomMessage}>Enjoy Learning!</div>
        <footer className={classes.actions}>
          <Button className={classes.button} onClick={props.onConfirm}>Continue</Button>
        </footer>
      </div>
    )
}

export default Introduction;