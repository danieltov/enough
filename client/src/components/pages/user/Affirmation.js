import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Affirmation = ({
  affirmations: { achievements, quotes, strengths, gratitudes }
}) => {
  let masterArray = [];
  if (achievements.length) achievements.forEach(a => masterArray.push(a));
  if (quotes.length) quotes.forEach(q => masterArray.push(q));
  if (strengths.length) strengths.forEach(s => masterArray.push(s));
  if (gratitudes.length) gratitudes.forEach(g => masterArray.push(g));

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

  // * Destructure affirmation object
  const {
    text,
    image,
    affirmationType,
    title,
    dateAchieved,
    madeMeFeel
  } = masterArray[0];

  console.log(affirmationType);

  const strOrGrat = (affirmationType, text, image) => (
    <>
      <Card.Title>
        {affirmationType === 'strength' ? (
          <h2 style={{ textAlign: 'center', color: '#292929' }}>
            You may not feel it now but remember, you are{' '}
            <strong>strong</strong> enough.
          </h2>
        ) : (
          <h2>
            It may not feel like it now, but try to remember what you're
            <strong>grateful</strong> for.
          </h2>
        )}
      </Card.Title>
      <Card.Text style={{ color: '#292929' }}>
        <em>On a better day, you asked us to remind you:</em> "{text}"
      </Card.Text>
    </>
  );

  return (
    <>
      <Card body>
        {affirmationType !== 'achievement' && affirmationType !== 'quote'
          ? strOrGrat(affirmationType, text, image)
          : affirmationType !== 'achievement'
          ? 'quote'
          : 'achievement'}
      </Card>
      <>{image && <Card.Img variant='bottom' />}</>
    </>
  );
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
