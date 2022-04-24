import React from 'react';
import Button from '../UI/Button';
// import Notes from './Notes';

import classes from './Lesson4.module.css';

const Lesson4 = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Welcome to Lesson Four</h2>
        </header>
        <div className={classes.content}>
            <p>Congratulations on your progress. You have finally reached the last lesson of your journey!</p>
            <p>This is the most exciting lesson of this course. Here you will learn how to compose your own music!</p>
            <p>There are several options to choose from! Take your pick, listen to the computer generated audio and try to compose your own original piece!!</p>
        </div>
        <div className={classes.bottomMessage}>Have Fun!!!</div>
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onConfirm}>Continue</Button>
        </footer>
    </div>
};

export default Lesson4;