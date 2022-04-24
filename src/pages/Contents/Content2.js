import React from 'react';
import Button from '../../UI/Button';

import classes from './Content2.module.css';

const Content1 = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Welcome to Lesson Two</h2>
        </header>
        <div className={classes.content}>
            <p>Every major chord is made up of a triad (a set of three notes) in a specific interval. <br /> For example, to play a C major chord, we need to play the notes C, E and G together.</p>
            <p>To know more about intervals and how to find the triad of a chord, visit the following link - </p>
            <a style={{color: "#41B3A3"}} href="https://www.schoolofrock.com/resources/keyboard/piano-chords-for-beginners"> https://www.schoolofrock.com/resources/keyboard/piano-chords-for-beginners </a>
        </div>
        {/* <div className={classes.bottomMessage}>Play the different chords on the Keyboard</div> */}
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onBackClick}>Back</Button>
            <Button className={classes.button} onClick={props.onNextClick}>Next</Button>
        </footer>
    </div>
};

export default Content1;