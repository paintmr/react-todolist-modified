import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import text from './text';
import alert from './alert';


export default combineReducers({
  todos,
  text,
  filter,
  alert
})