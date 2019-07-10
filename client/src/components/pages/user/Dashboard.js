import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1 className='text-center mt-0'>How are you feeling today?</h1>
      </Col>
      <Col xs={12}>
        <Row className='m-3 mt-5'>
          <Col xs={12} md={4}>
            <Link to='/affirm'>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-laugh-beam dash-icon' />
              </h1>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to='/affirmation'>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-meh dash-icon' />
              </h1>
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to='/affirmation'>
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
  user: PropTypes.object
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  user: state.auth.user
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(mapStateToProps)(Dashboard);