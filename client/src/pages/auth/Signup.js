import React, { Component } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
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
          className='d-none d-md-flex justify-content-center align-items-start'>
          <div class='form-container'>
            <Form validated={true} onSubmit={() => {}}>
              <h2 className='text-center'>
                <strong>Create</strong> an account.
              </h2>
              <Form.Group>
                <Form.Control type='email' name='email' placeholder='Email' />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type='password'
                  name='password-repeat'
                  placeholder='Password (repeat)'
                />
              </Form.Group>
              <Form.Group>
                <Button variant='primary' size='lg' block onClick={() => {}}>
                  Sign Up
                </Button>
              </Form.Group>
              <Link to='/login' class='already'>
                You already have an account? Login here.
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Signup;
