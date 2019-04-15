import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

jest.useFakeTimers();

let mockAnswer = 'React elements';

const checkAnswerMock = jest.fn();

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
      getCards={checkAnswerMock}
      />
    )
  });

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      message: ''
    })
  });

  it ('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should check answer from user', () => {
 wrapper.find('.user-answer').simulate('change', {target: {value: 'React elements'}});
  });
  expect(mockAnswer).toEqual('React elements');

  it('should setState when handleInput is invoked', () => {
    wrapper.find('.user-answer').simulate('change', {target: {value: 'React elements'}});
    expect(mockAnswer).toEqual('React elements');
  });

  it('should check if setTimeout has been called', () => {
    wrapper.find('.form').simulate('submit', { preventDefault: () => {}});
   expect(setTimeout).toHaveBeenCalledTimes(1);
  })
});