import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import logger from 'redux-logger';
// let store;
export function configureStore() {
  let store = createStore(reducer, applyMiddleware(thunk, logger));
  console.log(store);
  return store;
}
