import { SET_NOTICE, REMOVE_NOTICE } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NOTICE:
      // ! return state and add our payload (our notice)
      return [...state, payload];
    case REMOVE_NOTICE:
      // ! return state but filter out our payload, which will be an ID
      return state.filter(notice => notice.id !== payload);
    default:
      return state;
  }
}
