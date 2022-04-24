import React from 'react';
import classes from './NotesLong.module.css';

const NotesLong = (props) => {

    const map = {
        'C': ["C", "E", "G"],
        'C#': ["C#", "E#", "G#"],
        'D': ["D", "F#", "A"],
        'D#': ["D#", "G", "A#"],
        'E': ["E", "G#", "B"],
        'F': ["F", "A", "C"],
        'F#': ["F#", "A#", "C#"],
        'G': ["G", "B", "D"],
        'G#': ["G#", "C", "D#"],
        'A': ["A", "C#", "E"],
        'A#': ["A#", "D", "F"],
        'B': ["B", "D#", "F#"],
    }

    console.log(props.chord);

    return <div className={classes.mainContainer}>
        <div className={classes.item} style={{backgroundColor: props.chord === 'C' ? '#E27D60' : ''}}>C</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'C#' ? '#E27D60' : ''}}>C#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'D'  ? '#E27D60' : ''}}>D</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'D#' ? '#E27D60' : ''}}>D#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'E' || props.chord === 'C' ? '#E27D60' : ''}}>E</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'F'  || props.chord === 'C#'? '#E27D60' : ''}}>F</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'F#' || props.chord === 'D' ? '#E27D60' : ''}}>F#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'G' || props.chord === 'C' || props.chord === 'D#' ? '#E27D60' : ''}}>G</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'G#' || props.chord === 'E' || props.chord === 'C#'? '#E27D60' : ''}}>G#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A' || props.chord === 'D' || props.chord === 'F' ? '#E27D60' : ''}}>A</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A#' || props.chord === 'F#' || props.chord === 'D#' ? '#E27D60' : ''}}>A#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'B' || props.chord === 'G' || props.chord === 'E' ? '#E27D60' : ''}}>B</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'F' ||  props.chord === 'G#' ? '#E27D60' : ''}}>C</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A' || props.chord === 'F#'? '#E27D60' : ''}}>C#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'G' || props.chord === 'A#' ? '#E27D60' : ''}}>D</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'B' || props.chord === 'G#' ? '#E27D60' : ''}}>D#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A' ? '#E27D60' : ''}}>E</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A#' ? '#E27D60' : ''}}>F</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'B' ? '#E27D60' : ''}}>F#</div>


        {/* <div className={classes.item} style={{backgroundColor: props.chord === 'C' ? '#E27D60' : ''}}>G</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'C#' ? '#E27D60' : ''}}>G#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'D'  ? '#E27D60' : ''}}>A</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'D#' ? '#E27D60' : ''}}>A#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'E' || props.chord === 'C' ? '#E27D60' : ''}}>B</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'F'  || props.chord === 'C#'? '#E27D60' : ''}}>C</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'F#' || props.chord === 'D' ? '#E27D60' : ''}}>C#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'G' || props.chord === 'C' || props.chord === 'D#' ? '#E27D60' : ''}}>D</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'G#' || props.chord === 'E' || props.chord === 'C#'? '#E27D60' : ''}}>D#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A' || props.chord === 'D' || props.chord === 'F' ? '#E27D60' : ''}}>E</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A#' || props.chord === 'F#' || props.chord === 'D#' ? '#E27D60' : ''}}>F</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'B' || props.chord === 'G' || props.chord === 'E' ? '#E27D60' : ''}}>F#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'F' ||  props.chord === 'G#' ? '#E27D60' : ''}}>G</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'A' || props.chord === 'F#'? '#E27D60' : ''}}>G#</div>
        <div className={classes.item} style={{backgroundColor: props.chord === 'G' || props.chord === 'A#' ? '#E27D60' : ''}}>A</div> */}
    </div>
};

export default NotesLong;