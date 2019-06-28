import React, { Component } from 'react';
import { Row, Col, Image, Form } from 'react-bootstrap';
import Link from 'react-router-dom/Link';

class Login extends Component {
  render() {
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
            <Form validated={true} onSubmit={() => {}}>
              <h2 className='text-center'>
                <strong>Login</strong> to your account.
              </h2>
              <Form.Group>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group>
                <input
                  className='form-control'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </Form.Group>
              <Form.Group>
                <button className='btn btn-primary btn-block' type='submit'>
                  Login
                </button>
              </Form.Group>
              <Link to='/signup' className='already'>
                Don't have an account? Signup here.
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Login;
