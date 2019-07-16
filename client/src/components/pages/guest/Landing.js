import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row, Col, Image } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

const Landing = ({ isAuthenticated }) => {
  // * Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Row className='m-3'>
      <Col
        xs={12}
        lg={6}
        xl={5}
        className='offset-xl-1 d-flex flex-column justify-content-center align-items-sm-center align-items-md-start'>
        <h1 className='m-0 font-weight-bold'>
          <strong>Enough.</strong>
        </h1>
        <p>
          An app to store your accomplishments, strengths, and other positives
          in your life. When you need it most, we'll remind you that{' '}
          <strong>you are enough. We have the receipts.</strong>
        </p>
        <p>
          <Link to='/signup' className='btn btn-lg action-button'>
            Sign Up
          </Link>
        </p>
      </Col>
      <Col xs={12} md={5} lg={5} className='offset-lg-1 offset-xl-0 d-sm-block'>
        <Image
          src='/assets/img/enough_person.png'
          className='mt-3 mt-sm-0'
          fluid
        />
      </Col>
    </Row>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
