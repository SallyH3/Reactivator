import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe ('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  });

  it ('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      currentCard: null,
      quiz: [],
      incorrectCards: [],
      showReview: false
    });
  });

  it ('should setState in getCards method', () => {
wrapper.setState({quiz:[{
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
  }]}) 
wrapper.instance().getCards(1);
expect(wrapper.state('quiz')).toEqual([{subject: "JSX",
question: "JSX represents objects called what?",
answer: "React elements",
correct: false,
answered: true,
id: 1},
{
  subject: "JSX",
  question: "JSX is a combination of these two languages",
  answer: "HTML and JavaScript",
  correct: false,
  id: 2
  }
]);
  });

  it('should setState in getAllCards method', () => {
    
  });
});
