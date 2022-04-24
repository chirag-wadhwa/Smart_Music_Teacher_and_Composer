import React from 'react';
import soundfile1 from '../assets/audio/jazz/jazz_16_1.wav';
import soundfile2 from '../assets/audio/jazz/jazz_16_2.wav';
import soundfile3 from '../assets/audio/jazz/jazz_32_1.wav';
import soundfile4 from '../assets/audio/jazz/jazz_64_1.wav';
import ReactAudioPlayer from 'react-audio-player';

import classes from './JazzWindow.module.css';

const JazzWindow = () => {
    return (
        <div className={classes.mainContainer}>
            <h3 className={classes.header}>Jazz Music</h3>
            <div className={classes.soundContainer}>
                <ReactAudioPlayer className={classes.sound} src={soundfile1} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile2} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile3} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile4} controls />
            </div>
        </div>
    );
};

export default JazzWindow;