import { combineReducers } from "redux";
import authReducer from "./authReducer";
import lessonReducer from './lessonReducer';

export default combineReducers({
  auth: authReducer,
  lesson: lessonReducer,
});