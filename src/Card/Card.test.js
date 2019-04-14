import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

let mockAnswer = 'React elements';

const getCardsMock = jest.fn();

let mockData = [
  {
    subject: "JSX",
    question: "JSX represents objects called what?",
    answer: "React elements",
    correct: false,
    id: 1
  },
  {
    subject: "JSX",
    question: "JSX is a combination of these two languages",
    answer: "HTML and JavaScript",
    correct: false,
    id: 2
  }
]


describe ('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card card={mockData}
      answer={mockAnswer}
      getCards={getCardsMock}
      />
    )
  });

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      message: '',
      incorrectCards: []
    })
  });

  it('should check answer from user', () => {
 wrapper.find('.user-answer').simulate('change', {target: {value: 'React elements'}});
  });
  expect(mockAnswer).toEqual('React elements');

  it('should setState when handleInput is invoked', () => {
    wrapper.find('.user-answer').simulate('change', {target: {value: 'React elements'}});
    expect(mockAnswer).toEqual('React elements');
  });

  //fix this test below
  it('should invoke getCards when user presses return key', () => {
    wrapper.find('.form').simulate('submit', { preventDefault: () => {}});
    expect(getCardsMock).toBeCalled()
  })
});