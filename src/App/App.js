import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Controls from '../Controls/Controls.js';
import '../Styles/index.scss';
import data from '../data.js';
import Popup from '../Popup/Popup.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCard: null,
      cards: [],
      currentCards: []
    }
  }

  checkReturnCard = () => {
    const currentCard = this.state.currentCard
    if(!currentCard) {
      return <div></div>
    } else {
      return (
        <Card 
          card={currentCard}
        />)
      }  
    }

  render() {
    return (
      <section className='main-container'>
        <Controls />
        <header className='title'>
          Reactivator
        </header>
        <p className='subtitle'>
          a react.js study tool
        </p>
      {
        data.map(trivia => 
          <Card 
          key={trivia.id}
          subject={trivia.subject}
          question={trivia.question}
          answer={trivia.answer}
          />)
      }
      {
      data.map(trivia => 
        <Popup
          key={trivia.id}
          subject={trivia.subject}
          question={trivia.question}
          answer={trivia.answer}
          />)
      }
      {this.checkReturnCard()}
      </section>
    );
  }
}
