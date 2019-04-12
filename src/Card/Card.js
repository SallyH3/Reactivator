import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <main className='card-container'>
        <h3 className='subject'>
          Subject: 
        </h3>
        <h4 className='question'>
          Question:
        </h4>
        <form className='form'>
          <input type='text'
            placeholder="Enter answer here"
            // value= {this.state.}
          className='user-answer'></input>
        </form>
      </main>
    )
  }
}