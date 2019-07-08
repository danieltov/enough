import axios from 'axios';
import { setNotice } from './notice';
import { ADD_AFF_SUCCESS, ADD_AFF_FAIL } from './types';
import { loadUser } from './auth';
import setAuthToken from '../utils/setAuthToken';

// * Create New Affirmationn

export const newAffirmation = ({
  text,
  image,
  dateAdded,
  affirmationType,
  title,
  dateAchieved,
  madeMeFeel,
  author
}) => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let body = {};
  if (text) body.text = text;
  if (image) body.image = image;
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
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setNotice(error.msg, 'danger')));
    }

    dispatch({ type: ADD_AFF_FAIL });
  }
};
