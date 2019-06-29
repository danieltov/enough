import axios from 'axios';
import { setNotice } from './notice';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// * Register User
export const registerUser = ({ name, email, password }) => async dispatch => {
  // ! Set headers for http request
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };

  // ! Convert form data into JSON
  const body = JSON.stringify({ name, email, password });

  try {
    // ! Send HTTP request to API and await
    const res = await axios.post('/api/users', body, config);

    // ! Dispatch the response data (the token), and set type to REGISTER_SUCCESS
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    // ! Remember, our errors are stored as an array of objects.
    const errors = err.response.data.errors;

    // ! If any errors, loop through errors and dispatch them as Notices with the type 'danger'
    if (errors) {
      errors.forEach(error => dispatch(setNotice(error.msg, 'danger')));
    }

    // ! Dispatch REGISTER_FAIL to the auth reducer
    dispatch({ type: REGISTER_FAIL });
  }
};
