import React, { Component } from 'react';
import data from '../data.js';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      message: ''
    }
  }

  checkAnswer = () => {
    if(this.state.input === this.props.answer) {
      this.setState({
        message: 'Correct - nice work!'
      })
    } else {
      this.setState({
        message: 'Almost! Try again!'
      })
      
    }
  }
  
  handleReturn = () => {
    this.setState({input: ''})
    this.checkAnswer();
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleInputChange = (e) => {
    e.preventDefault()
    //fix below so that user can enter upper or lowercase and it still checks answer correctly
    let userInput = this.state.input.toLowerCase();
    let result = this.checkAnswer(userInput);
    this.handleReturn(result)
  }


  render() {
    return (
      <main className='card-container'>
        <h3 className='subject'>
          Subject: {this.props.subject}
        </h3>
        <h4 className='question'>
          Question: {this.props.question}
        </h4>
        <form 
          className='form'
          onSubmit={this.handleInputChange}>
          <input 
            type='text'
            value={this.state.input}
            onChange={this.handleInput}
            placeholder="Enter answer and press return"
            className='user-answer'>
          </input>
          <p className = 'message'>{this.state.message}</p>
        </form>
      </main>
    )
  }
}

export default Card;