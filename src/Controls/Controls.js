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
    this.props.incorrectCards.map((card) => {
      console.log('incorrect card in onClick method', card)
      return card;
      // on click, will hide current unanswered/correctly answered cards and display incorrect cards 
    })
  }

  render() {
    console.log('incorrectCards array: ', this.props.incorrectCards)
    return  (
      <section className='button-container'>
          <input 
          value='Study list'
          type='submit'
          className='study-button'
          onClick={this.displayIncorrectCards}
          />
      </section>
    )
  }
}