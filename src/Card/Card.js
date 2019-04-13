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
    if(this.state.input.toLowerCase() === this.props.answer.toLowerCase()) {
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
    let userInput = this.state.input;
    let result = this.checkAnswer(userInput);
    this.handleReturn(result)
  }

  //need local storage in this component to keep track of cards they answered wrong, will then send these cards they answered wrong to controls where they click 'study list' and it displays cards that were answered wrong


  render() {
    return (
      <main className='card-container'>
      <section className='cards'>
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
        </section>
      </main>
    )
  }
}

export default Card;