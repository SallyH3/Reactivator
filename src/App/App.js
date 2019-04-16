import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Controls from '../Controls/Controls.js';
import '../Styles/index.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCard: null,
      quiz: [],
      incorrectCards: [],
      showReview: false
    }
  }

  fetchData = () => {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/sallyhaefling/reacttrivia')
      .then(response => response.json())
      .then(quiz => this.getStorage(quiz.reactTrivia))
      .catch(err => console.log(err))
  }

  getStorage = (quiz) => {
    const newQuiz = quiz.map(x => {
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
    const incorrectCard = this.state.quiz.find(card => {
      return card.id === id;
    })
    const checkRepeatCard = this.state.incorrectCards.find(card => {
      return card.id === id;
    })
    if(!checkRepeatCard) {
      const updateIncorrectCards = [...this.state.incorrectCards, incorrectCard];
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
    this.fetchData();
  }

  getCards = (id) => {
    const card = this.state.quiz.map(x => {
      if(id === x.id) {
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

  getIncorrectCards = () => {
    this.state.incorrectCards.map(card => {
      return (
        <Card 
          incorrectCards={card}
          />
        )
    })
    this.setState({
      showReview: true
    })
  }

  getAllCards = () => {
    this.state.incorrectCards.map(card => {
      return (
        <Card 
          incorrectCards={card}
          />
        )
    })
    this.setState({
      showReview: false
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
    let allCards = this.state.quiz.map(trivia => {
      if(!trivia.answered) {
      return (
      <Card 
        getCards = {this.getCards}
        id={trivia.id}
        key={trivia.id}
        subject={trivia.subject}
        question={trivia.question}
        answer={trivia.answer}
        setStorage={this.setStorage}
      />)
      }
    });
    let reviewCards = this.state.incorrectCards.map(trivia =>  {
      if(trivia.answered) {
        return (
        <Card 
          getCards = {this.getCards}
          id={trivia.id}
          key={trivia.id}
          subject={trivia.subject}
          question={trivia.question}
          answer={trivia.answer}
          setStorage={this.setStorage}
        />)
        }
      });
    let cardList = this.state.showReview ? 
      reviewCards :
      allCards;
    return (
      <section className='main-container'>
        <Controls 
          getAllCards={this.getAllCards}
          incorrectCards={this.state.incorrectCards}
          getIncorrectCards={this.getIncorrectCards}
        />
        <header className='title'>
          Reactivator
        </header>
        <p className='subtitle'>
          a react.js study tool
        </p>
      {cardList}
      {this.checkReturnCard()}
      </section>
    );
  }
}

