import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  // ! when successfully registered or login, set to true
  // ! will use this to display information only auth'd users can see
  isAuthenticated: null,
  // ! when a req is made to the backend and data is received and loaded,
  // ! ...set to false
  loading: true,
  // ! store user data after we make our req to /api/auth
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
}
