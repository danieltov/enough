import { combineReducers } from 'redux';
import notice from './notice';
import auth from './auth';
import aff from './aff';
import mood from './mood';

export default combineReducers({
  // ! This will export any reducers I create
  notice,
  auth,
  aff,
  mood
});
