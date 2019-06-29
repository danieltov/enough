import { combineReducers } from 'redux';
import notice from './notice';
import auth from './auth';

export default combineReducers({
  // ! This will export any reducers I create
  notice,
  auth
});
