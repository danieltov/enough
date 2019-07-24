import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { deleteAffirmation } from '../../../actions/aff';
import { setNotice } from '../../../actions/notice';
import { Link } from 'react-router-dom';

import { Row, Col, Card, Button } from 'react-bootstrap';
import Notice from '../../Notice';

const Profile = ({
  affirmations: { achievements, quotes, strengths, gratitudes },
  deleteAffirmation,
  setNotice,
  count
}) => {
  let masterArray = [];
  if (achievements.length) achievements.forEach(a => masterArray.push(a));
  if (quotes.length) quotes.forEach(q => masterArray.push(q));
  if (strengths.length) strengths.forEach(s => masterArray.push(s));
  if (gratitudes.length) gratitudes.forEach(g => masterArray.push(g));

  const strength = (id, affirmationType, text) => (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className='d-flex justify-content-center align-items-start'>
              <h2 className='text-center text-uppercase font-weight-bold mr-3'>
                Strength
              </h2>
              <Button
                variant={'danger'}
                type={'submit'}
                onClick={() => deleteAffirmation(affirmationType, id)}>
                <i className='fas fa-trash-alt' />
              </Button>
            </div>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <em>On a better day, you told us this:</em>
            <div className='quote'>
              I am <strong>strong</strong> because: &ldquo;{text}&rdquo;
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  const gratitude = (id, affirmationType, text) => (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className='d-flex justify-content-center align-items-start'>
              <h2 className='text-center text-uppercase font-weight-bold mr-3'>
                Gratitude
              </h2>
              <Button
                variant={'danger'}
                type={'submit'}
                onClick={() => deleteAffirmation(affirmationType, id)}>
                <i className='fas fa-trash-alt' />
              </Button>
            </div>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <em>On a better day, you told us this:</em>
            <div className='quote'>
              I am <strong>grateful</strong> for: &ldquo;{text}&rdquo;
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  const quote = (id, affirmationType, text, author) => (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className='d-flex justify-content-center align-items-start'>
              <h2 className='text-center text-uppercase font-weight-bold mr-3'>
                Quote
              </h2>
              <Button
                variant={'danger'}
                type={'submit'}
                onClick={() => deleteAffirmation(affirmationType, id)}>
                <i className='fas fa-trash-alt' />
              </Button>
            </div>
            <hr className='' />
          </Card.Title>
          <Card.Text as={'div'}>
            <div className='quote'>&ldquo;{text}&rdquo;</div>
            <div className='quote text-right'>&mdash;{author}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

  const achievement = (
    id,
    affirmationType,
    title,
    text,
    dateAchieved,
    madeMeFeel
  ) => (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className='d-flex justify-content-center align-items-start'>
              <h2 className='text-center text-uppercase font-weight-bold mr-3'>
                Achievement
              </h2>
              <Button
                variant={'danger'}
                type={'submit'}
                onClick={() => deleteAffirmation(affirmationType, id)}>
                <i className='fas fa-trash-alt' />
              </Button>
            </div>
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
      madeMeFeel,
      _id
    } = obj;

    return affirmationType === 'strength' ? (
      <Fragment key={idx}>{strength(_id, affirmationType, text)}</Fragment>
    ) : affirmationType === 'gratitude' ? (
      <Fragment key={idx}>{gratitude(_id, affirmationType, text)}</Fragment>
    ) : affirmationType === 'quote' ? (
      <Fragment key={idx}>{quote(_id, affirmationType, text, author)}</Fragment>
    ) : (
      <Fragment key={idx}>
        {achievement(
          _id,
          affirmationType,
          title,
          text,
          dateAchieved,
          madeMeFeel
        )}
      </Fragment>
    );
  });

  return (
    <>
      <Notice />
      {!count ? (
        <h3 className='text-center text-white mt-0'>
          You haven't entered any affirmations yet.{' '}
          <Link to='/affirm'>Add one now!</Link>
        </h3>
      ) : (
        <h3 className='text-center text-white mt-0'>
          Here are all of the affirmations you've entered. We hope you don't,
          but feel free to delete some:
        </h3>
      )}
      {<>{mappedMaster}</> || ''}
    </>
  );
};
Profile.propTypes = {
  affirmations: PropTypes.object.isRequired,
  deleteAffirmation: PropTypes.func.isRequired,
  setNotice: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};
// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  affirmations: state.auth.user.affirmations,
  count: state.auth.user.affirmations.count
});
// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions
export default connect(
  mapStateToProps,
  { deleteAffirmation, setNotice }
)(Profile);
