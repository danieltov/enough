import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col, Card, CardDeck } from 'react-bootstrap';
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

  // * Destructure affirmation object
  const {
    text,
    affirmationType,
    author,
    title,
    dateAchieved,
    madeMeFeel
  } = masterArray[0];

  console.log(affirmationType);

  const strOrGrat = (affirmationType, text) => (
    <>
      <Card className='strGratCard'>
        <Card.Body>
          <Card.Title>
            {affirmationType === 'strength' ? (
              <h2>
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
          <Card.Text>
            <em>On a better day, you told us this:</em>
            <p className='quote'>&ldquo;{text}&rdquo;</p>
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant='bottom'
          src={
            'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg'
          }
        />
      </Card>
    </>
  );

  const quote = (text, author) => (
    <>
      <Card className='quoteCard'>
        <Card.Body>
          <Card.Title>
            <h2>
              Here's one of your <strong>favorite quotes</strong> to brighten up
              your day.
            </h2>
          </Card.Title>
          <Card.Text>
            {text} <br /> &mdash;{author}
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant='bottom'
          src={
            'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg'
          }
        />
      </Card>
    </>
  );

  const achievement = (text, title, dateAchieved, madeMeFeel) => (
    <>
      <Card.Title>
        <h2>
          Don't forget about your <strong>achievements</strong>. Remember this
          one?
        </h2>
      </Card.Title>
    </>
  );

  return (
    <>
      {affirmationType !== 'achievement' && affirmationType !== 'quote'
        ? strOrGrat(affirmationType, text)
        : affirmationType !== 'achievement'
        ? quote(text, author)
        : 'achievement'}
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
