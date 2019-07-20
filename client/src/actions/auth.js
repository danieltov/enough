import axios from 'axios';
import { setNotice } from './notice';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken';

// * Load User
export const loadUser = () => async dispatch => {
  // ! Check to see if there's a token in localStorage
  if (localStorage.token) {
    // ! If token, set global header
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// * Register User
export const registerUser = ({
  name,
  email,
  password,
  history
}) => async dispatch => {
  // ! Set headers for http request
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };

  // ! Convert form data into JSON
  const body = JSON.stringify({ name, email, password });

  try {
    // ! Send HTTP request to API and await
    const res = await axios.post('/api/users', body, config);

    // ! Dispatch the response data (the token), and set type to REGISTER_SUCCESS, then run loadUser()
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
    history.push('/dashboard');
  } catch (err) {
    // ! Remember, our errors are stored as an array of objects.
    console.error(err);
    const errors = err.response.data.errors;

    // ! If any errors, loop through errors and dispatch them as Notices with the type 'danger'
    if (errors) {
      errors.forEach(error => dispatch(setNotice(error.msg, 'danger')));
    }

    // ! Dispatch REGISTER_FAIL to the auth reducer
    dispatch({ type: REGISTER_FAIL });
  }
};

// * Login User
export const loginUser = (email, password, history) => async dispatch => {
  // ! Set headers for http request
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };

  // ! Convert form data into JSON
  const body = JSON.stringify({ email, password });

  try {
    // ! Send HTTP request to API and await
    const res = await axios.post('/api/auth', body, config);

    // ! Dispatch the response data (the token), and set type to LOGIN_SUCCESS, then run loadUser()
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
    history.push('/dashboard');
  } catch (err) {
    // ! Remember, our errors are stored as an array of objects.
    const errors = err.response.data.errors;

    // ! If any errors, loop through errors and dispatch them as Notices with the type 'danger'
    if (errors) {
      errors.forEach(error => dispatch(setNotice(error.msg, 'danger')));
    }

    // ! Dispatch LOGIN_FAIL to the auth reducer
    dispatch({ type: LOGIN_FAIL });
  }
};

// * Logout User
export const logoutUser = () => async dispatch => {
  dispatch({ type: LOGOUT });
};
