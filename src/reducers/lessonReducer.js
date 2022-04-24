import {
    CHANGE_LESSON,
  } from "../Constants";

  const initialState = {
    lesson: 0,
  };


const lessonReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case CHANGE_LESSON: return {
            lesson: action.lesson,
        };
        default: return state;
    }
}

export default lessonReducer;