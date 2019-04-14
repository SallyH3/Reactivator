import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  displayMessage = () => {
    //will display message to user if they click the study list button and there are no incorrect cards to display
  }

  displayIncorrectCards = () => {
    // to display incorrectly answered cards - will happen on click of the button, local storage is keeping track of incorrect cards inside of App.js component
  }

  render() {
    return  (
      <section className='button-container'>
          <input 
          value='Study list'
          type='submit'
          className='study-button'
          {/* on click, will hide current unanswered cards and display incorrect cards, take out 'togglePopup' */}
          onClick={this.togglePopup}
          />
      </section>
    )
  }
}