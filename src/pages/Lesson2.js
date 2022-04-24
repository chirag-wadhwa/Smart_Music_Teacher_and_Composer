import React, { useState } from 'react';
// import Button from '../UI/Button';
import Content1 from './Contents/Content1';
import Content2 from './Contents/Content2';
import Content3 from './Contents/Content3';

// import classes from './Lesson2.module.css';

const Lesson2 = (props) => {

    const [contentNumber, setContentNumber] = useState(1);

    const onNextClickHandler = () => {
        setContentNumber(contentNumber => contentNumber+1);
    }

    const onBackClickHandler = () => {
        setContentNumber(contentNumber => contentNumber-1);
    }

    return <React.Fragment>
        {contentNumber === 1 ? <Content1 onNextClick={onNextClickHandler}/> : null}
        {contentNumber === 2 ? <Content2 onBackClick={onBackClickHandler} onNextClick={onNextClickHandler}/> : null}
        {contentNumber === 3 ? <Content3 onBackClick={onBackClickHandler} onNextClick={onNextClickHandler} onConfirm={props.onConfirm} /> : null}
    </React.Fragment>
};

export default Lesson2;