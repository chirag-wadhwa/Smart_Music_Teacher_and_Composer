import React from 'react';
import Button from '../../UI/Button';

import classes from './Content1.module.css';

const Content1 = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Welcome to Lesson Two</h2>
        </header>
        <div className={classes.content}>
            <p>Here you will learn different chords on a Keyboard</p>
            <p>We will Learn about major chords and how the major chords are played</p>
        </div>
        {/* <div className={classes.bottomMessage}>Play the different chords on the Keyboard</div> */}
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onNextClick}>Next</Button>
        </footer>
    </div>
};

export default Content1;