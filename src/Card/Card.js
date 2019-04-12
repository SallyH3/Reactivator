import React, { Component } from 'react';
import data from '../data.js';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <main className='card-container'>
        <h3 className='subject'>
          Subject: {this.props.subject[5]}
        </h3>
        <h4 className='question'>
          Question: {this.props.question[5]}
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