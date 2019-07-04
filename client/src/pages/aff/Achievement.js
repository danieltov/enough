import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Achievement = () => {
  return (
    <Row>
      <Col xs={12} className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form>
            <h2 className='text-center'>
              What is an <strong>achievement</strong> you are proud of?
            </h2>
            <Form.Group>
              <Form.Control
                type='text'
                name='title'
                placeholder='Achievement'
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as='textarea'
                name='text'
                placeholder='Description'
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                name='madeMeFeel'
                placeholder='Compelete the sentence. This achievement made me feel...'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label for='dateAchieved'>Date Achieved:</Form.Label>
              <Form.Control type='date' name='dateAchieved' />
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

export default Achievement;
