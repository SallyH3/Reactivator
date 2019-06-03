import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 

document.getElementById('root'));
serviceWorker.unregister();