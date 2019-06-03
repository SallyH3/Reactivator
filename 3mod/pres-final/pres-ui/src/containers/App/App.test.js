import React from 'react';
import ReactDOM from 'react-dom';
import App, { mapDispatchToProps } from './index';
import { mapStateToProps } from '.';
import * as actions from '../../actions';
import {setPresidents} from '../../actions';

describe('mstp', () => {
  it('should return props with an object with an array from state', () => {
    const mockState = {
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
      ],
      boolean: true,
      error: 'Error fetching data'
    }

    const expected = {
      
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
      ],
      boolean: true
  }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})

describe('mdtp', () => {
  it('calls dispatch with setPresidents when data is fetched', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = setPresidents([{birth_year: 1732,
      death_year: 1799,
      left_office: "1797-03-04",
      number: 1,
      party: "No Party",
      president: "George Washington",
      took_office: "1789-04-30"}])
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setPresidents([{birth_year: 1732,
      death_year: 1799,
      left_office: "1797-03-04",
      number: 1,
      party: "No Party",
      president: "George Washington",
      took_office: "1789-04-30"}])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('calls dispatch with handleLoading when data has not been fetched yet', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.handleLoading(true)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.isLoading(true)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('calls dispatch with handleError when user encounters an error', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.handleError(true)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.handleError(true)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
