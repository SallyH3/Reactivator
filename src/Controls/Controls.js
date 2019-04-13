import React, { Component } from 'react';
import Popup from '../Popup/Popup.js';

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
    // to display incorrectly answered cards - will happen on click of the button, local storage is keeping track of incorrect cards inside of Cards.js component
  }

  render() {
    return  (
      <section className='button-container'>
      {/* on click, scroll bar will display with cards they got wrong - will be hidden until they click */}
          <input 
          value='Study list'
          type='submit'
          className='study-button'
          onClick={this.togglePopup}
          />
          {this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup}
          />
          : null
        }
      </section>
    )
  }
}