const TasksReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch(action.type) {
    case 'CREATE_TASK':
      return [...state, action.task]

    case 'COMPLETE_TASK':
      // build the list
      let list = []
      state.forEach((task) => {
        list[task.id] = task;
      })
      // so we can override the existing one with the updated data
      list[action.task.id] = action.task

      // now just transform it into an array
      let final = []
      for(let task in list) {
        final.push(list[task])
      }
      return final

    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.task.id)

    default:
      return state
  }
}

export default TasksReducer

