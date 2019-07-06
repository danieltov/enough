import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = props => {
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
            <h1 className='text-center mt-0 '>
              <i className='fas fa-meh dash-icon' />
            </h1>
          </Col>
          <Col xs={12} md={4}>
            <h1 className='text-center mt-0 '>
              <i className='fas fa-frown dash-icon' />
            </h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
