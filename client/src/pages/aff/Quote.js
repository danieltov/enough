import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Quote = () => {
  return (
    <Row>
      <Col xs={12} className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form>
            <h2 className='text-center'>
              What is one of your <strong>favorite quotes</strong>?
            </h2>
            <Form.Group>
              <Form.Control
                as='textarea'
                name='text'
                placeholder='Description'
              />
            </Form.Group>
            <Form.Group>
              <Form.Control type='text' name='author' placeholder='Author' />
            </Form.Group>

            <Form.Group className='my-2 custom-file'>
              <Form.Control
                type='file'
                className='custom-file-input'
                id='customFile'
              />
              <Form.Label className='custom-file-label' for='customFile'>
                Optionally, upload a photo
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Button variant='primary' type='submit' block>
                Save
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Quote;
