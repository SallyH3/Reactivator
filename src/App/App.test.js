import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

const mockState = this.state.quiz.map(x => {
  return {...x, answered: false
  }
});
 
describe ('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App data />
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
      quiz: mockState,
      incorrectCards: [],
      showReview: false
    })
  })
});
