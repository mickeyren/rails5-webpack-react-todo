const TasksReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch(action.type) {
    case 'CREATE_TASK':
      return [...state, action.task]
    case 'COMPLETE_TASK':
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.task.id)
    default:
      return state
  }
}

export default TasksReducer

