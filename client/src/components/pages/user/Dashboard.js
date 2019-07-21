import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setNotice } from '../../../actions/notice';
import { postMood } from '../../../actions/mood';

import { Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Notice from '../../Notice';

const Dashboard = ({ count, setNotice, postMood }) => {
  // * Redirect affirmation count is 0
  if (!count) return <Redirect to='/affirm' />;

  return (
    <Row>
      <Col xs={12}>
        <Notice />
        <h1 className='text-center mt-0'>How are you feeling today?</h1>
      </Col>
      <Col xs={12}>
        <Row className='m-3 mt-5'>
          <Col xs={12} md={4}>
            <Link to='/affirm' onClick={() => postMood({ value: 1 })}>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-laugh-beam dash-icon' />
              </h1>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to='/affirmation' onClick={() => postMood({ value: 0 })}>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-meh dash-icon' />
              </h1>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to='/affirmation' onClick={() => postMood({ value: -1 })}>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-frown dash-icon' />
              </h1>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Dashboard.propTypes = {
  count: PropTypes.number.isRequired,
  setNotice: PropTypes.func.isRequired,
  postMood: PropTypes.func.isRequired
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  count: state.auth.user.affirmations.count
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(
  mapStateToProps,
  { setNotice, postMood }
)(Dashboard);
