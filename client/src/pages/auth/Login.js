import React, { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('SUCCESS');
  };

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
          <Form validated onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              <strong>Login</strong> to your account.
            </h2>
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

export default Login;
