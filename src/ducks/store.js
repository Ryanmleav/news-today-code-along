import {createStore, applyMiddleware, combineReducers} from 'redux';
import hackerNewsReducer from './hackerNewsreducer'
import promiseMiddleware from 'redux-promise-middleware';
import  mediumReducers from './mediumReducer'

const rootReducer = combinereducers({
  hackerNews: hackerNewsReducer,
  medium: mediumReducers
})

export default createStore(hackerNewsReducer, applyMiddleware(promiseMiddleware))