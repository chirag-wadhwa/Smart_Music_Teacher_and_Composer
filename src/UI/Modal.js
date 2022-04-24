import React from 'react';

// import Card from './Card';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} />
      {props.children}
    </React.Fragment>
  );
};

export default Modal;