import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const EnoughNav = () => {
  return (
    <Navbar expand='md'>
      <Link to='/' className='navbar-brand'>
        Enough
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='nav'>
        <Nav className='ml-auto'>
          <Link to='/login' className='btn ml-auto action-button border-0'>
            Login
          </Link>
          <Link to='/signup' className='btn action-button ml-auto'>
            Sign Up
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
