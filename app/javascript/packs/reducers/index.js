import { combineReducers } from 'redux';
import TasksReducer from './task';

const rootReducer = combineReducers({
  tasks: TasksReducer
})

export default rootReducer;
