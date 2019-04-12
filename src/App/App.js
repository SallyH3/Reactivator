import React, { Component } from 'react';
import Card from '../Card/Card.js';
import '../Styles/index.scss';

export default class App extends Component {
  render() {
    return (
      <section className='main-container'>
        <header className='title'>
          Reactivator
        </header>
        <p className='subtitle'>
          a react.js study tool
        </p>
      <Card />
      </section>
    );
  }
}
