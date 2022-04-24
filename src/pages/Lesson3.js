import React from 'react';
import Button from '../UI/Button';

import classes from './Lesson3.module.css';

const Lesson3 = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Welcome to Lesson Three</h2>
        </header>
        <div className={classes.content}>
            <p>Here you will learn to play different songs on the keyboard</p>
        </div>
        <div className={classes.bottomMessage}>Get ready to Have Fun!</div>
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onConfirm}>Continue</Button>
        </footer>
    </div>
};

export default Lesson3;