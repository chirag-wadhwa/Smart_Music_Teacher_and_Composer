import {createStore} from 'redux';

const lessonReducer = (state = {kesson: 0}, action) => {
    console.log(action);
    switch(action.type){
        case 'change': return {
            lesson: action.lesson,
        };
        default: return state;
    }
}

const store = createStore(lessonReducer);

export default store;