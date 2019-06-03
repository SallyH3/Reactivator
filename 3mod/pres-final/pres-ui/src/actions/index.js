export const setPresidents = (presidents) =>({
  type: 'SET_PRESIDENTS',
  presidents
})

export const handleLoading = (boolean) => ({
  type: 'HANDLE_LOADING',
  boolean
})

export const handleError = (message) => ({
  type: 'HANDLE_ERROR',
  message
})