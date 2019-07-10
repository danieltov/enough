import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Affirmation = ({
  affirmations: { achievements, quotes, strengths, gratitudes }
}) => {
  // TODO push all affirmations into a master array
  let masterArray = [];
  if (achievements.length) achievements.forEach(a => masterArray.push(a));
  if (quotes.length) quotes.forEach(q => masterArray.push(q));
  if (strengths.length) strengths.forEach(s => masterArray.push(s));
  if (gratitudes.length) gratitudes.forEach(g => masterArray.push(g));

  // TODO Shuffle array
  const shuffler = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  shuffler(masterArray);

  // TODO Populate component with first element from array

  return <div>{JSON.stringify(masterArray[0])}</div>;
};

Affirmation.propTypes = {
  affirmations: PropTypes.object.isRequired
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  affirmations: state.auth.user.affirmations
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(mapStateToProps)(Affirmation);
