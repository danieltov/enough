import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

export const EnoughNav = () => {
  return (
    <>
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>Enough</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='nav' />
        <Nav className='mr-auto'>
          <Nav.Link href='#home' className='btn ml-auto action-button border-0'>
            Login
          </Nav.Link>
          <Nav.Link href='#link' className='btn action-button'>
            Signin
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
