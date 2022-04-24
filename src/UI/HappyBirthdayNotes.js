import React from 'react';

import classes from './HappyBirthdayNotes.module.css';

const HappyBirthdayNotes = () => {
    return (
        <div className={classes.mainContainer}>
            <h3 className={classes.header}>Happy Birthday</h3>
            <div className={classes.linesContainer}>
                <div className={classes.line}>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>A</div>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>C</div>
                    <div className={classes.item}>B</div>
                </div>
                <div className={classes.line}>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>A</div>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>D</div>
                    <div className={classes.item}>C</div>
                </div>
                <div className={classes.line}>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>G</div>
                    <div className={classes.item}>G'</div>
                    <div className={classes.item}>E</div>
                    <div className={classes.item}>C</div>
                    <div className={classes.item}>B</div>
                    <div className={classes.item}>A</div>
                </div>
                <div className={classes.line}>
                    <div className={classes.item}>F</div>
                    <div className={classes.item}>F</div>
                    <div className={classes.item}>E</div>
                    <div className={classes.item}>C</div>
                    <div className={classes.item}>D</div>
                    <div className={classes.item}>C</div>
                </div>
            </div>
        </div>
    );
};

export default HappyBirthdayNotes;