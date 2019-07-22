// * ==================== IMPORTS ==================== *//
import uuid from 'uuid';
import { SET_NOTICE, REMOVE_NOTICE } from './types';

// * ==================== EXPORT ==================== *//

export const setNotice = (msg, noticeType, timeout = 2000) => dispatch => {
  const id = uuid.v4();

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
