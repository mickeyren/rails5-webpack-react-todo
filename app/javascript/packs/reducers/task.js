const TasksReducer = (state, action) => {
  console.log('TasksReducer', state, action)
  if (typeof state === 'undefined') {
    return initialState
  }
  return state;
};

export default TasksReducer;

