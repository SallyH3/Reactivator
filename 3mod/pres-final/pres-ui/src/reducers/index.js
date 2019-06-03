import {combineReducers} from 'redux';
import {presidentsReducer} from './presidents-reducer.js';
import {handleErrorReducer} from './handleError-reducer.js';
import {handleLoadingReducer} from './handleLoading-reducer.js';

export const rootReducer = combineReducers({
  presidents: presidentsReducer,
  boolean: handleLoadingReducer,
  message: handleErrorReducer
})