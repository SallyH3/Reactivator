import * as actions from '../actions';

describe('actions', () => {
  it('should return an array of presidents with a type of SET_PRESIDENTS', () => {
    const expected = {
        type: 'SET_PRESIDENTS',
        presidents: [ 
          {
            birth_year: 1732,
          death_year: 1799,
          left_office: "1797-03-04",
          number: 1,
          party: "No Party",
          president: "George Washington",
          took_office: "1789-04-30"
          }
        ]
      }

    const result = actions.setPresidents([ 
      {
        birth_year: 1732,
      death_year: 1799,
      left_office: "1797-03-04",
      number: 1,
      party: "No Party",
      president: "George Washington",
      took_office: "1789-04-30"
      }
    ])

    expect(result).toEqual(expected)
  });

  it('should return a boolean with a type of HANDLE_LOADING', () => {

    const expected = {
      type: 'HANDLE_LOADING',
      boolean: true
    }

    const result = actions.handleLoading(true)

    expect(result).toEqual(expected)
  });

  it('should return a message with a type of HANDLE_ERROR', () => {
    const expected = {
      type: 'HANDLE_ERROR',
      message: 'Error fetching data'
    }

    const result = actions.handleError('Error fetching data')

    expect(result).toEqual(expected)
  })
})