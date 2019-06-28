import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

export const EnoughNav = () => {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>Enough</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='nav'>
        <Nav className='ml-auto'>
          <Nav.Link
            href='/login'
            className='btn ml-auto action-button border-0'>
            Login
          </Nav.Link>
          <Nav.Link href='/signup' className='btn action-button'>
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
