import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => dispatch => {
  // ! Note: "dispatch" is thunk middleware!
  const id = uuid.v4();

  // ! Use dispatch to call setAlert from our Alert Reducer
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
