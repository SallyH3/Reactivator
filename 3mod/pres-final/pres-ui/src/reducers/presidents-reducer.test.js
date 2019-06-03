import {presidentsReducer} from './presidents-reducer';
import * as actions from '../actions';

describe('presidentsReducer', () => {
  it('should return initial state', () => {
    const expected = []
    const result = presidentsReducer(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should return the state with all presidents when case is SET_PRESIDENTS', () => {
    const expected = [{ 
        birth_year: 1732,
      death_year: 1799,
      left_office: "1797-03-04",
      number: 1,
      party: "No Party",
      president: "George Washington",
      took_office: "1789-04-30"
    }]

    const result = presidentsReducer(undefined, actions.setPresidents([{ 
      birth_year: 1732,
    death_year: 1799,
    left_office: "1797-03-04",
    number: 1,
    party: "No Party",
    president: "George Washington",
    took_office: "1789-04-30"
  }]))

  expect(result).toEqual(expected)
  })
})