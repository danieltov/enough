import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { newAffirmation } from '../../../actions/aff';
import { setNotice } from '../../../actions/notice';

import Achievement from './Forms/Achievement';
import Quote from './Forms/Quote';
import Strength from './Forms/Strength';
import Gratitude from './Forms/Gratitude';

const Affirm = ({ newAffirmation, setNotice }) => {
  const [randComp, setRandComp] = useState();

  useEffect(() => {
    setRandComp(
      [<Achievement />, <Strength />, <Quote />, <Gratitude />][
        ~~(Math.random() * 4)
      ]
    );
  }, []);

  return randComp || '';
};

Affirm.propTypes = {
  user: PropTypes.object.isRequired,
  newAffirmation: PropTypes.func.isRequired,
  setNotice: PropTypes.func.isRequired
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  user: state.auth.user
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions.
// ! Then you pass the main component function

export default connect(
  mapStateToProps,
  { newAffirmation, setNotice }
)(Affirm);
