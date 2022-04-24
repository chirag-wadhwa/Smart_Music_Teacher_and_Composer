import React from 'react';
import {useSelector} from 'react-redux';

import classes from './LessonSelectorList.module.css';

const LessonSelectorList = (props) => {

    // const lesson = useSelector(state => state.lesson);

    // const onChangeLesson = (lesson) => {
    //     dispatch({type: 'change', lesson: lesson});
    // }
    return(
        <div className={classes.listContainer}>
            <div className={props.lesson === 1 ? `${classes.listItem} ${classes.active}` : `${classes.listItem} ${classes.inactive}`} onClick={()=> props.onChangeLesson(1)}></div>
            <div className={props.lesson === 2 ? `${classes.listItem} ${classes.active}` : `${classes.listItem} ${classes.inactive}`} onClick={()=> props.onChangeLesson(2)}></div>
            <div className={props.lesson === 3 ? `${classes.listItem} ${classes.active}` : `${classes.listItem} ${classes.inactive}`} onClick={()=> props.onChangeLesson(3)}></div>
            <div className={props.lesson === 4 ? `${classes.listItem} ${classes.active}` : `${classes.listItem} ${classes.inactive}`} onClick={()=> props.onChangeLesson(4)}></div>
        </div>
    )
};

export default LessonSelectorList;