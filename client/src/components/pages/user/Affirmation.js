import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { connect } from 'react-redux';

import { Row, Col, Card, Button } from 'react-bootstrap';
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

  const imgSet = [
    'https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg',
    'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg',
    'https://images.pexels.com/photos/1089027/pexels-photo-1089027.jpeg',
    'https://images.pexels.com/photos/935785/pexels-photo-935785.jpeg',
    'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg',
    'https://images.pexels.com/photos/988874/pexels-photo-988874.jpeg',
    'https://images.pexels.com/photos/997704/pexels-photo-997704.jpeg',
    'https://images.pexels.com/photos/1137313/pexels-photo-1137313.jpeg'
  ];

  const randImg = imgSet[[~~(Math.random() * imgSet.length)]];

  const [imgReady, setImgReady] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = randImg;
    img.onload = () => setImgReady(1);
  }, [randImg]);

  const strength = text => (
    <>
      <Card className='strCard'>
        <Card.Body>
          <Card.Title>
            <h2>
              You may not feel it now, but remember: you are{' '}
              <strong>strong enough</strong>.
            </h2>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <em>On a better day, you told us this:</em>
            <div className='quote'>
              I am <strong>strong</strong> because: &ldquo;{text}&rdquo;
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Img variant='bottom' src={randImg} />
      </Card>
    </>
  );

  const gratitude = text => (
    <>
      <Card className='gratCard'>
        <Card.Body>
          <Card.Title>
            <h2>
              Try to remember what you're <strong>grateful</strong> for.
            </h2>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <em>On a better day, you told us this:</em>
            <div className='quote'>
              I am <strong>grateful</strong> for: &ldquo;{text}&rdquo;
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Img variant='bottom' src={randImg} />
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
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <div className='quote'>&ldquo;{text}&rdquo;</div>
            <div className='quote text-right'>&mdash;{author}</div>
          </Card.Text>
        </Card.Body>
        <Card.Img variant='bottom' src={randImg} />
      </Card>
    </>
  );

  const achievement = (title, text, dateAchieved, madeMeFeel) => (
    <>
      <Card className='achievementCard'>
        <Card.Body>
          <Card.Title>
            <h2>
              Look back at your <strong>accomplishments</strong>.
            </h2>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <div>
              <em>Remember this one?</em>
            </div>
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
        <Card.Img variant='bottom' src={randImg} />
      </Card>
    </>
  );

  return imgReady ? (
    <>
      <div className='d-flex justify-content-center mb-5'>
        <Button
          type={null}
          size={'lg'}
          className='mr-3 btn action-button'
          as={Link}
          to='/affirm'>
          Add New
        </Button>
        <Button
          type={null}
          size={'lg'}
          className='btn action-button'
          as={Link}
          to='/affirmation'>
          Show Me Another
        </Button>
      </div>
      {affirmationType === 'strength'
        ? strength(text)
        : affirmationType === 'gratitude'
        ? gratitude(text)
        : affirmationType === 'quote'
        ? quote(text, author)
        : achievement(title, text, dateAchieved, madeMeFeel)}
    </>
  ) : (
    ''
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
