import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Achievement = (
  <Form>
    <h2 className='text-center'>
      What is an <strong>achievement</strong> you are proud of?
    </h2>
    <Form.Group>
      <Form.Control type='text' name='title' placeholder='Achievement' />
    </Form.Group>
    <Form.Group>
      <Form.Control as='textarea' name='text' placeholder='Description' />
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
      <Form.Control type='file' className='custom-file-input' id='customFile' />
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
);
const Gratitude = (
  <Form>
    <h2 className='text-center'>
      What is one thing you're <strong>grateful</strong> for?
    </h2>
    <Form.Group>
      <Form.Control type='text' name='text' placeholder='Gratitude' />
    </Form.Group>

    <Form.Group className='my-2 custom-file'>
      <Form.Control type='file' className='custom-file-input' id='customFile' />
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
);
const Quote = (
  <Form>
    <h2 className='text-center'>
      What is one of your <strong>favorite quotes</strong>?
    </h2>
    <Form.Group>
      <Form.Control as='textarea' name='text' placeholder='Description' />
    </Form.Group>
    <Form.Group>
      <Form.Control type='text' name='author' placeholder='Author' />
    </Form.Group>

    <Form.Group className='my-2 custom-file'>
      <Form.Control type='file' className='custom-file-input' id='customFile' />
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
);
const Strength = (
  <Form>
    <h2 className='text-center'>
      What is one of your <strong>strengths</strong>?
    </h2>
    <Form.Group>
      <Form.Control type='text' name='text' placeholder='Strength' />
    </Form.Group>

    <Form.Group className='my-2 custom-file'>
      <Form.Control type='file' className='custom-file-input' id='customFile' />
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
);

const Affirmation = () => {
  return (
    <Row>
      <Col xs={12} className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          {[Achievement, Quote, Strength, Gratitude][~~(Math.random() * 4)]}
        </div>
      </Col>
    </Row>
  );
};

export default Affirmation;
