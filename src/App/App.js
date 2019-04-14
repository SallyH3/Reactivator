import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Controls from '../Controls/Controls.js';
import '../Styles/index.scss';
import data from '../data.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCard: null,
      quiz: [],
      incorrectCards: []
    }
  }

  getStorage = () => {
    const newQuiz = data.map(x => {
      return {...x, answered: false
      }
    })
    const incorrectAnswers = localStorage.getItem('incorrectAnswers')
    if(incorrectAnswers !== null) {
      this.setState({
        quiz: newQuiz,
        incorrectCards: JSON.parse(incorrectAnswers)
      })
    }
    this.setState({
      quiz: newQuiz
    })
  }

  setStorage = (id) => {
    const incorrectCard = data.find(card => {
      return card.id === id;
    })
    const checkRepeatCard = this.state.incorrectCards.find(card => {
      return card.id === id;
    })
    if(!checkRepeatCard) {
      const updateIncorrectCards = [...this.state.incorrectCards, incorrectCard]
      this.setState({
        incorrectCards: updateIncorrectCards
      }, 
      () => {
        localStorage.setItem('incorrectAnswers', JSON.stringify(updateIncorrectCards))
      }
      )
    }
  }

  componentDidMount = () => {
    this.getStorage();
  }

  getCards = (id) => {
    const card = this.state.quiz.map(x => {
      if(id === x.id) {
        //makes new object that includes answered: true now
        //making the answered true after finding id
        return {...x, answered: true
        }
      } else {
        return x;
      }
    })
    this.setState({
      quiz: card
    })
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
        this.state.quiz.map(trivia => {
          if(!trivia.answered) {
          return (<Card 
          getCards = {this.getCards}
          id={trivia.id}
          key={trivia.id}
          subject={trivia.subject}
          question={trivia.question}
          answer={trivia.answer}
          setStorage={this.setStorage}
          />)
          } else {
            return null
          }
        })
      }
      {this.checkReturnCard()}
      </section>
    );
  }
}
