const initialState = true

export const handleLoadingReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'HANDLE_LOADING':
      return action.boolean
      default:
      return state
  }
}

export default handleLoadingReducer;