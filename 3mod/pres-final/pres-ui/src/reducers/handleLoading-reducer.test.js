import {handleLoadingReducer} from './handleLoading-reducer';
import * as actions from '../actions';

describe('handleLoadingReducer', () => {
  it('should return initial state', () => {
    const expected = true
    const result = handleLoadingReducer(undefined, true)
    expect(result).toEqual(expected)
  });

  it('should return the state with a boolean when the case is HANDLE_LOADING', () => {
    const expected = true
    const result = handleLoadingReducer(undefined, actions.handleLoading(true))

    expect(result).toEqual(expected)
  })
})