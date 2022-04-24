import React from 'react';
import soundfile1 from '../assets/audio/classical/classical_1.wav';
import soundfile2 from '../assets/audio/classical/classical_2.wav';
import soundfile3 from '../assets/audio/classical/classical_3.wav';
import soundfile4 from '../assets/audio/classical/classical_4.wav';
import ReactAudioPlayer from 'react-audio-player';

import classes from './ClassicalWindow.module.css';

const ClassicalWindow = () => {
    return (
        <div className={classes.mainContainer}>
            <h3 className={classes.header}>Classical Music</h3>
            <div className={classes.soundContainer}>
                <ReactAudioPlayer className={classes.sound} src={soundfile1} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile2} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile3} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile4} controls />
            </div>
        </div>
    );
};

export default ClassicalWindow;