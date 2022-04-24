import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Piano from "./Piano";
import LessonSelectorList from '../UI/LessonSelectorList';
import Modal from '../UI/Modal';
import Introduction from './Introduction';
import Button2 from '../UI/Button2';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';
import Notes from '../UI/Notes';
import NotesLong from '../UI/NotesLong';
import ChordPage from './Contents/ChordPages/ChordPage';
import HappyBirthdayNotes from '../UI/HappyBirthdayNotes';
import JingleBellsNotes from '../UI/JingleBellsNotes';
import JazzWindow from '../UI/JazzWindow';
import PopWindow from '../UI/PopWindow';
import ClassicalWindow from '../UI/ClassicalWindow';
import NotesHappyBirthday from '../UI/NotesHappyBirthday';
import NotesJingleBells from '../UI/NotesJingleBells';

import classes from './Lessons.module.css';

const Lessons = () => {
    const lesson = useSelector(state => state.lesson);
    const [showMainModal, setShowMainModal] = useState(true);
    const [showFirstLesson, setShowFirstLesson] = useState(false);
    const [showSecondLesson, setShowSecondLesson] = useState(false);
    const [showThirdLesson, setShowThirdLesson] = useState(false);
    const [showFourthLesson, setShowFourthLesson] = useState(false);
    const [chordStage, setChordStage] = useState(false);
    const [songsStage, setSongsStage] = useState(false);
    const [compositionStage, setCompositionStage] = useState(false);
    const [showChordContainer, setShowChordContainer] = useState(false);
    const [song, setSong] = useState(0);
    const [music, setMusic] = useState(0);
    // 1 - Happy Birthday
    // 2 - Jingle Bells

    const [chord, setChord] = useState('');

    const dispatch = useDispatch();

    const onChangeLessonHandler = (l) => {
        dispatch({ type: 'change', lesson: l });
        if (l === 1) {
            setShowFirstLesson(true);
            setShowSecondLesson(false);
            setShowThirdLesson(false);
            setShowFourthLesson(false);
            setShowChordContainer(false);
            setChordStage(false);
            setSongsStage(false);
            setCompositionStage(false);
            setSong(0);
            setChord('');
            setMusic(0);
        }
        if (l === 2) {
            setShowFirstLesson(false);
            setShowSecondLesson(true);
            setShowThirdLesson(false);
            setShowFourthLesson(false);
            setCompositionStage(false);
            setSongsStage(false);
            setSong(0);
            setMusic(0);
        }
        if (l === 3) {
            setShowFirstLesson(false);
            setShowSecondLesson(false);
            setShowThirdLesson(true);
            setShowFourthLesson(false);
            setShowChordContainer(false);
            setCompositionStage(false);
            setChordStage(false);
            setChord('');
            setMusic(0);
        }
        if (l === 4) {
            setShowFirstLesson(false);
            setShowSecondLesson(false);
            setShowThirdLesson(false);
            setShowFourthLesson(true);
            setShowChordContainer(false);
            setChordStage(false);
            setSongsStage(false);
            setSong(0);
            setChord('');
        }
    }
    const closeMainModal = () => {
        setShowMainModal(false);
    }

    const closeFirstLesson = () => {
        setShowFirstLesson(false);
    }

    const closeSecondLesson = () => {
        setShowSecondLesson(false);
        setChordStage(true);
    }

    const closeThirdLesson = () => {
        setShowThirdLesson(false);
        setChordStage(false);
        setSongsStage(true);
    }

    const closeFourthLesson = () => {
        setShowFourthLesson(false);
        setCompositionStage(true);
        // setChordStage(false);
        // setSongsStage(true);
    }

    const onClickPlayChordHandler = (chord) => {
        setShowChordContainer(true);
        setChord(chord);
    }

    const onClickPlaySongHandler = (song) => {
        setSong(song);
    }

    const onClickPlayMusicHandler = (music) => {
        setMusic(music);
    }

    const closeChordPage = () => {
        setShowChordContainer(false);
    }

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

    return <React.Fragment>
        <div style={{ color: 'black', fontSize: '2rem', position: 'fixed', zIndex: '10' }}></div>
        {song === 1 ? <HappyBirthdayNotes /> : null}
        {song === 2 ? <JingleBellsNotes /> : null}
        {music === 1 ? <JazzWindow /> : null}
        {music === 2 ? <PopWindow /> : null}
        {music === 3 ? <ClassicalWindow /> : null}
        {/* <HappyBirthdayNotes/> */}
        {showMainModal ? <Modal onConfirm={closeMainModal}><Introduction onConfirm={closeMainModal} /></Modal> : null}
        {lesson === 1 || lesson === 4 ? <Notes /> : null}
        {lesson === 2 ? <NotesLong chord={chord} map={map} /> : null}
        {song === 1 ? <NotesHappyBirthday /> : null}
        {song === 2 ? <NotesJingleBells /> : null}
        {showFirstLesson ? <Modal onConfirm={closeFirstLesson}><Lesson1 onConfirm={closeFirstLesson} /></Modal> : null}
        {showSecondLesson ? <Modal onConfirm={closeSecondLesson}><Lesson2 onConfirm={closeSecondLesson} /></Modal> : null}
        {showThirdLesson ? <Modal onConfirm={closeThirdLesson}><Lesson3 onConfirm={closeThirdLesson} /></Modal> : null}
        {showFourthLesson ? <Modal onConfirm={closeFourthLesson}><Lesson4 onConfirm={closeFourthLesson} /></Modal> : null}
        {showChordContainer ? <Modal onConfirm={closeChordPage}><ChordPage chord={chord} triad={map[chord]} onConfirm={closeChordPage} /></Modal> : null}
        <Piano lesson={lesson} song={song} />
        {chordStage ?
            <div className={classes.buttonContainer}>
                <Button2 onClick={() => onClickPlayChordHandler('C')}>C Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('C#')}>C# Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('D')}>D Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('D#')}>D# Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('E')}>E Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('F')}>F Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('F#')}>F# Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('G')}>G Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('G#')}>G# Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('A')}>A Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('A#')}>A# Chord</Button2>
                <Button2 onClick={() => onClickPlayChordHandler('B')}>B Chord</Button2>
            </div> :
            null}
        {songsStage ?
            <div className={classes.buttonContainer}>
                <Button2 onClick={() => onClickPlaySongHandler(1)}>Happy Birthday</Button2>
                <Button2 onClick={() => onClickPlaySongHandler(2)}>Jingle Bells</Button2>
            </div> : null}
        {compositionStage ?
            <div className={classes.buttonContainer}>
                <Button2 onClick={() => onClickPlayMusicHandler(1)}>JAZZ</Button2>
                <Button2 onClick={() => onClickPlayMusicHandler(2)}>POP</Button2>
                <Button2 onClick={() => onClickPlayMusicHandler(3)}>CLASSICAL</Button2>
            </div> : null}
        <h4 className={classes.lessonContainer}>SELECT LESSON</h4>
        <LessonSelectorList lesson={lesson} onChangeLesson={onChangeLessonHandler} />
    </React.Fragment>
}

export default Lessons;