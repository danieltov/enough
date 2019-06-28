import uuid from 'uuid';
import { SET_NOTICE, REMOVE_NOTICE } from './types';

export const setNotice = (msg, noticeType, timeout = 5000) => dispatch => {
  // ! Note: "dispatch" is thunk middleware!
  const id = uuid.v4();

  // ! Use dispatch to call setNotice from our Notice Reducer
  dispatch({
    type: SET_NOTICE,
    payload: { msg, noticeType, id }
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_NOTICE,
        payload: id
      }),
    timeout
  );
};
