import {handleErrorReducer} from './handleError-reducer';
import * as actions from '../actions';

describe('handleErrorReducer', () => {
  it('should return initial state', () => {
    const expected = ''
    const result = handleErrorReducer(undefined, '')
    expect(result).toEqual(expected)
  });

  it('should return the state with a message when the case is HANDLE_ERROR', () => {
    const expected = 'Error fetching data'

    const result = handleErrorReducer(undefined, actions.handleError('Error fetching data'))

    expect(result).toEqual(expected)
  })
})