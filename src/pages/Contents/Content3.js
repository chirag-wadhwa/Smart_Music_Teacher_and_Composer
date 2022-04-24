import React from 'react';
import Button from '../../UI/Button';

import classes from './Content2.module.css';

const Content1 = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Welcome to Lesson Two</h2>
        </header>
        <div className={classes.content}>
            {/* <p>Now that you know how to make chords, let us play the chords on the Keyboard!</p>
            <p>To know more about intervals and how to find the triad of a chord, visit the following link - </p>
            <a style={{color: "#41B3A3"}} href="https://www.schoolofrock.com/resources/keyboard/piano-chords-for-beginners"> https://www.schoolofrock.com/resources/keyboard/piano-chords-for-beginners </a> */}
        </div>
        <div className={classes.bottomMessage}>Now that you know how to make chords, let us play the chords on the Keyboard!</div>
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onBackClick}>Back</Button>
            <Button className={classes.button} onClick={props.onConfirm}>Next</Button>
        </footer>
    </div>
};

export default Content1;