// * ==================== IMPORTS ==================== *//
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { POST_MOOD_SUCCESS, POST_MOOD_FAIL } from './types';

// * ==================== EXPORTS ==================== *//
export const postMood = mood => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const jsonBody = JSON.stringify(mood);

  try {
    const res = await axios.post('/api/users/mood', jsonBody, config);
    dispatch({ type: POST_MOOD_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: POST_MOOD_FAIL });
  }
};
