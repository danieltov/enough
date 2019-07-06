import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/auth';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

// ! Destructuring props, de-structure auth prop <- Destructuring object within object
const EnoughNav = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  const authLinks = (
    <Nav className='ml-auto'>
      <Link
        onClick={logoutUser}
        to='/'
        className='btn ml-auto action-button border-0'>
        <i className='fas fa-sign-out-alt' /> Logout
      </Link>
      <Link
        to='/dashboard'
        className='btn action-button my-1 my-md-0 mr-md-2 ml-auto'>
        Dashboard
      </Link>
      <Link to='/profile' className='btn action-button ml-auto'>
        Profile
      </Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className='ml-auto'>
      <Link to='/login' className='btn ml-auto action-button border-0'>
        <i className='fas fa-sign-in-alt' />
        &nbsp; Login
      </Link>
      <Link to='/signup' className='btn action-button ml-auto'>
        Sign Up
      </Link>
    </Nav>
  );

  return (
    <Navbar expand='md'>
      <Link to='/' className='navbar-brand'>
        Enough
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='nav'>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(EnoughNav);
