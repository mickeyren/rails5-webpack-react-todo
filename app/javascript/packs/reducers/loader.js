const MakingRequest = (state = false, action) => {
  switch (action.type) {
    case 'MAKING_REQUEST':
      return action.isLoading

    default:
      return state;
  }
}

export default MakingRequest
