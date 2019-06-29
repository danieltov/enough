import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { setNotice } from '../../actions/notice';
import { registerUser } from '../../actions/auth';

// ! Note: Destructuring props | ({setNotice}) = props.setNotice.
const Signup = ({ setNotice, registerUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setNotice('Passwords do not match', 'danger');
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <Row>
      <Col
        xs={12}
        md={6}
        className='d-none d-md-flex justify-content-center align-items-start'>
        <Image
          src='assets/img/enough_person2.png'
          className='signup-img p-0'
          fluid
        />
      </Col>
      <Col
        xs={12}
        md={6}
        className='d-flex justify-content-center align-items-start'>
        <div className='form-container'>
          <Form onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              <strong>Create</strong> an account.
            </h2>
            <Form.Group>
              <Form.Control
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                name='password2'
                placeholder='Password (repeat)'
                value={password2}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Button variant='primary' size='lg' block type='submit'>
                Sign Up
              </Button>
            </Form.Group>
            <Link to='/login' className='already'>
              You already have an account? Login here.
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

Signup.propTypes = {
  setNotice: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(
  null,
  { setNotice, registerUser }
)(Signup);
