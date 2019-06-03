const initialState = ''

export const handleErrorReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'HANDLE_ERROR':
      return action.message
      default:
        return state
  }
}

export default handleErrorReducer;