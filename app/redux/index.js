import { combineReducers } from 'redux';
import {firstReducer} from './first';
import {secondReducer} from './second';


//export * from './first'

const appReducer = combineReducers({
  first: firstReducer,
  second: secondReducer
})

export default appReducer;
