// * ==================== REACT ==================== *//
import React from 'react';
import PropTypes from 'prop-types';

// * ==================== REDUX ==================== *//
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

// * ==================== VIEW COMPONENTS ==================== *//
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const EnoughNav = ({ auth: { isAuthenticated, loading }, logoutUser }) => {
  const authLinks = (
    <Nav className='ml-auto'>
      <Nav.Item>
        <Nav.Link
          as={Link}
          eventKey={2}
          onClick={logoutUser}
          to='/'
          className='btn ml-auto action-button border-0'>
          <i className='fas fa-sign-out-alt' /> Logout
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          eventKey={3}
          to='/dashboard'
          className='btn action-button my-1 my-md-0 mr-md-2 ml-auto'>
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          eventKey={4}
          to='/profile'
          className='btn action-button ml-auto'>
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const guestLinks = (
    <Nav className='ml-auto'>
      <Nav.Item>
        <Nav.Link
          as={Link}
          eventKey={2}
          to='/login'
          className='btn ml-auto action-button border-0'>
          <i className='fas fa-sign-in-alt' /> &nbsp; Login
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={Link}
          eventKey={3}
          to='/signup'
          className='btn action-button ml-auto'>
          Sign Up
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar collapseOnSelect expand='lg'>
      <Nav.Link as={Link} eventKey={1} to='/' className='navbar-brand'>
        Enough
      </Nav.Link>
      <Navbar.Toggle aria-controls='nav' />
      <Navbar.Collapse id='nav'>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(EnoughNav);
