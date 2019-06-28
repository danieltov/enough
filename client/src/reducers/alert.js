import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      // ! return state and add our payload (our alert)
      return [...state, payload];
    case REMOVE_ALERT:
      // ! return state but filter out our payload, which will be an ID
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
