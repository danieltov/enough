import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  return (
    <Row>
      <Col xs={12}>
        <h1 className='text-center mt-0'>Thank you.</h1>
      </Col>
    </Row>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  user: state.auth.user
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(mapStateToProps)(Dashboard);
