import React from 'react';
import soundfile1 from '../assets/audio/pop/pop_1.wav';
import soundfile2 from '../assets/audio/pop/pop_2.wav';
import soundfile3 from '../assets/audio/pop/pop_3.wav';
import soundfile4 from '../assets/audio/pop/pop_4.wav';
import ReactAudioPlayer from 'react-audio-player';

import classes from './PopWindow.module.css';

const PopWindow = () => {
    return (
        <div className={classes.mainContainer}>
            <h3 className={classes.header}>Pop Music</h3>
            <div className={classes.soundContainer}>
                <ReactAudioPlayer className={classes.sound} src={soundfile1} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile2} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile3} controls />
                <ReactAudioPlayer className={classes.sound} src={soundfile4} controls />
            </div>
        </div>
    );
};

export default PopWindow;