import React from 'react';
import Button from '../../../UI/Button';

import classes from './ChordPage.module.css';

const ChordPage = (props) => {
    return <div className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.chord} Chord</h2>
        </header>
        <p className={classes.content}>The notes in the triad are {props.triad[0]}, {props.triad[1]}, {props.triad[2]}</p>
        <footer className={classes.actions}>
            <Button className={classes.button} onClick={props.onConfirm}>Continue</Button>
        </footer>
    </div>
};

export default ChordPage;