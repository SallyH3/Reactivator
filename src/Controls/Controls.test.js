import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';

const displayIncorrectCardsMock = jest.fn();

const mockIncorrectCards = [];

describe('Controls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls 
      incorrectCards={mockIncorrectCards}
      displayIncorrectCards={displayIncorrectCardsMock}/>
    )
  });

  it ('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('renders the study list button', () => {
    let btn = (wrapper).find('.study-button').simulate('click')
    expect(btn.exists()).toEqual(true);
  });
});