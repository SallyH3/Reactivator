import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return  (
      <section className='button-container'>
          <input 
          value='Study list'
          type='submit'
          className='study-button'
          // onClick={this.displayCards}
          />
      </section>
    )
  }
}

//this is where study list button will live

//method: displayCards to display incorrectly answered cards - will happen on click of the button

//Create scroll bar that appears when user has clicked on the 'study list' button inside of controls

//method: will display message to user if they click the button and there are no incorrect cards to display

//only cards that are answered incorrectly will be saved to localStorage