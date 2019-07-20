import axios from 'axios';
import { setNotice } from './notice';
import {
  ADD_AFF_SUCCESS,
  ADD_AFF_FAIL,
  DELETE_AFF_SUCCESS,
  DELETE_AFF_FAIL
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from './auth';

// * Create New Affirmationn

export const newAffirmation = (formData, history) => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  const {
    text,
    dateAdded,
    affirmationType,
    title,
    dateAchieved,
    madeMeFeel,
    author
  } = formData;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let body = {};
  if (text) body.text = text;
  if (dateAdded) body.dateAdded = dateAdded;
  if (affirmationType) body.affirmationType = affirmationType;
  if (title) body.title = title;
  if (dateAchieved) body.dateAchieved = dateAchieved;
  if (madeMeFeel) body.madeMeFeel = madeMeFeel;
  if (author) body.author = author;

  const jsonBody = JSON.stringify(body);

  try {
    if (body.madeMeFeel) {
      var res = await axios.post('/api/aff/achievement', jsonBody, config);
    } else {
      res = await axios.post('/api/aff', jsonBody, config);
    }

    dispatch({ type: ADD_AFF_SUCCESS, payload: res.data });
    dispatch(setNotice('You saved an affirmation! Add another?', 'success'));
    dispatch(loadUser());
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setNotice(error.msg, 'danger')));
    }

    dispatch({ type: ADD_AFF_FAIL });
  }
};

export const deleteAffirmation = (affirmationType, id) => async dispatch => {
  // * Bring in authToken
  if (localStorage.token) setAuthToken(localStorage.token);

  // * Create
  let path = '/api/aff';

  affirmationType === 'strength' && (path += `/strength/${id}`);
  affirmationType === 'quote' && (path += `/quote/${id}`);
  affirmationType === 'gratitude' && (path += `/gratitude/${id}`);
  affirmationType === 'achievement' && (path += `/achievement/${id}`);

  try {
    const res = await axios.delete(path);
    dispatch({ type: DELETE_AFF_SUCCESS, payload: res.data });
    dispatch(setNotice('You successfully deleted an affirmation', 'success'));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setNotice(error.msg, 'danger')));
    }

    dispatch({ type: DELETE_AFF_FAIL });
  }
};
