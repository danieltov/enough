import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginUser } from '../../actions/auth';
import { setNotice } from '../../actions/notice';

import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Notice from '../../components/Notice';

const Login = ({ loginUser, isAuthenticated, setNotice }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    loginUser(email, password);
    document.getElementById('password').value = '';
  };

  // * Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Row>
      <Col
        xs={12}
        md={6}
        className='d-none d-md-flex justify-content-end align-items-center'>
        <Image
          src='assets/img//enough_person3.png'
          className='signup-img'
          fluid
        />
      </Col>
      <Col
        xs={12}
        md={6}
        className='d-flex justify-content-start align-items-center'>
        <div className='form-container'>
          <Form onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              <strong>Login</strong> to your account.
            </h2>
            <Notice />
            <Form.Group>
              <Form.Control
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Button variant='primary' size='lg' type='submit' block>
                Login
              </Button>
            </Form.Group>
            <Link to='/signup' className='already'>
              Don't have an account? Signup here.
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  setNotice: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions

export default connect(
  mapStateToProps,
  { loginUser, setNotice }
)(Login);
