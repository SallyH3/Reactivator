import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import {setPresidents} from '../../actions';
import {handleLoading} from '../../actions';
import {handleError} from '../../actions';
import CardWrapper from '../CardWrapper';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

class App extends Component{
  constructor() {
    super();
    this.state={
    }
  }

  componentDidMount = () => {
    const url = 'http://localhost:3001/api/v1/presidents'
    fetch(url)
    .then(res => res.json())
    .then(results => {
      this.props.setPresidents(results)
      this.props.isLoading(false)
    })
    .catch(error => this.props.handleError(error))
  }

  render() {
    if(this.props.message) return <Error />
    if(this.props.boolean) return <Loader />
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        <CardWrapper presidents={this.props.presidents} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
  boolean: state.boolean,
  message: state.message
})

export const mapDispatchToProps = (dispatch) => ({
  setPresidents: (presidents) => dispatch(setPresidents(presidents)),
  isLoading: (boolean) => dispatch(handleLoading(boolean)),
  handleError: (message) => dispatch(handleError(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
