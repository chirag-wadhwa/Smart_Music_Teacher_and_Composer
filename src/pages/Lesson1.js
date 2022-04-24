import React from 'react';
import Button from '../UI/Button';
// import Notes from './Notes';

import classes from './Lesson1.module.css';

const Lesson1 = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Welcome to Lesson One</h2>
        </header>
        <div className={classes.content}>
            <p>Here you will learn about the different notes on a keyboard</p>
            <p>The list of notes in order on a key board are :- <br/>
            C  C# D D# E F F# G G# A A# B C <br />
            The notes (C, D, E, F, G, A, B) are denoted by the white keys on the keyboard. <br /> The notes (C#, D#, F#, G#, A#) are denoted by the black keys.</p>
        </div>
        <div className={classes.bottomMessage}>Play around with the keyboard to learn the notes and their names</div>
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onConfirm}>Go to the Keyboard</Button>
        </footer>
    </div>
};

export default Lesson1;