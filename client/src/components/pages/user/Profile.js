import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'react-bootstrap';
import Moment from 'react-moment';

const Profile = ({
  affirmations: { achievements, quotes, strengths, gratitudes }
}) => {
  let masterArray = [];
  if (achievements.length) achievements.forEach(a => masterArray.push(a));
  if (quotes.length) quotes.forEach(q => masterArray.push(q));
  if (strengths.length) strengths.forEach(s => masterArray.push(s));
  if (gratitudes.length) gratitudes.forEach(g => masterArray.push(g));

  const strOrGrat = (affirmationType, text) => (
    <>
      <Card className='strGratCard'>
        <Card.Body>
          <Card.Title>
            <h2 className='text-center text-uppercase font-weight-bold'>
              {affirmationType === 'strength' ? 'Strength' : 'Gratitude'}
            </h2>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            {affirmationType === 'strength' ? (
              <div className='quote'>
                I am <strong>strong</strong> because: &ldquo;{text}&rdquo;
              </div>
            ) : (
              <div className='quote'>
                I am <strong>grateful</strong> for: &ldquo;{text}&rdquo;
              </div>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  const quote = (text, author) => (
    <>
      <Card className='quoteCard'>
        <Card.Body>
          <Card.Title>
            <h2 className='text-center text-uppercase font-weight-bold'>
              Quote
            </h2>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <p className='quote'>&ldquo;{text}&rdquo;</p>
            <p className='quote text-right'>&mdash;{author}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  const achievement = (title, text, dateAchieved, madeMeFeel) => (
    <>
      <Card className='achievementCard'>
        <Card.Body>
          <Card.Title>
            <h2 className='text-center text-uppercase font-weight-bold'>
              Achievement
            </h2>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <div className='achievement title'>
              I am proud because: &ldquo;{title}&rdquo;
            </div>
            <div className='achievement date'>
              on{' '}
              <Moment format='MMMM DD, YYYY' add={{ days: 1 }}>
                {dateAchieved}
              </Moment>
            </div>
            <Row>
              <Col xs={12} md={6}>
                <div className='achievement text'>
                  What you said about it: &ldquo;{text}&rdquo;
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className='achievement text text-md-right'>
                  How It Felt: &ldquo;{madeMeFeel}&rdquo;
                </div>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  const mappedMaster = masterArray.map((obj, idx) => {
    const {
      text,
      affirmationType,
      author,
      title,
      dateAchieved,
      madeMeFeel
    } = obj;

    return affirmationType !== 'achievement' && affirmationType !== 'quote' ? (
      <Fragment key={idx}>{strOrGrat(affirmationType, text, idx)}</Fragment>
    ) : affirmationType !== 'achievement' ? (
      <Fragment key={idx}>{quote(text, author, idx)}</Fragment>
    ) : (
      <Fragment key={idx}>
        {achievement(title, text, dateAchieved, madeMeFeel, idx)}
      </Fragment>
    );
  });

  return (
    <>
      <h1 className='text-center mt-0'>
        Here are all of the affirmations you've entered. We hope you don't, but
        feel free to delete some:
      </h1>
      {<>{mappedMaster}</> || ''}
    </>
  );
};

Profile.propTypes = {
  affirmations: PropTypes.object.isRequired
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  affirmations: state.auth.user.affirmations
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(mapStateToProps)(Profile);
