import React, { Component } from 'react';
import Card from '../Card/Card.js';
import Controls from '../Controls/Controls.js';
import '../Styles/index.scss';
import data from '../data.js';

export default class App extends Component {
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
      <Card 
      subject={
        data.map((trivia, index) => {
          return trivia.subject
        })
      }
      question={
        data.map((trivia, index) => {
        return trivia.question;
      })}
      />
      </section>
    );
  }
}
