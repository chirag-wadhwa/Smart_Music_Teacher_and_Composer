import React from 'react';
import classes from './Notes.module.css';

const Notes = () => {
    return <div className={classes.mainContainer}>
        <div className={classes.item}>C</div>
        <div className={classes.item}>C#</div>
        <div className={classes.item}>D</div>
        <div className={classes.item}>D#</div>
        <div className={classes.item}>E</div>
        <div className={classes.item}>F</div>
        <div className={classes.item}>F#</div>
        <div className={classes.item}>G</div>
        <div className={classes.item}>G#</div>
        <div className={classes.item}>A</div>
        <div className={classes.item}>A#</div>
        <div className={classes.item}>B</div>
    </div>
};

export default Notes;