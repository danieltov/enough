import { ADD_AFF_SUCCESS, ADD_AFF_FAIL } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  success: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_AFF_SUCCESS:
      return { ...state, success: true };
    case ADD_AFF_FAIL:
      return { ...state, success: false };
    default:
      return state;
  }
}
