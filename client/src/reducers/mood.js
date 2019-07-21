import { POST_MOOD_FAIL, POST_MOOD_SUCCESS } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  data: null,
  success: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_MOOD_SUCCESS:
      return { ...state, data: payload, success: true };
    case POST_MOOD_FAIL:
      return { ...state, success: false };
    default:
      return state;
  }
}
