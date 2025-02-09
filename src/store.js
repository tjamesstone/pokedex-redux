import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer'
import pokeReducer from './ducks/userReducer'

const reducers = combineReducers({
    userReducer, 
    pokeReducer
})

const enhancers = compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore(reducers, enhancers)