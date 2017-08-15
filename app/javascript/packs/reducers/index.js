import { combineReducers } from 'redux';
import TasksReducer from './task';
import makingRequest from './loader';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  makingRequest
})

export default rootReducer;
