import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { newAffirmation } from '../../../../actions/aff';
import { setNotice } from '../../../../actions/notice';

import { Row, Col, Form, Button } from 'react-bootstrap';
import Notice from '../../../Notice';

const Gratitude = ({ newAffirmation, setNotice, count }) => {
  const [formData, setFormData] = useState({
    text: '',
    image: '',
    dateAdded: '',
    affirmationType: 'gratitude',
    title: '',
    dateAchieved: '',
    madeMeFeel: ''
  });

  const {
    text,
    image,
    dateAdded,
    affirmationType,
    title,
    dateAchieved,
    madeMeFeel,
    author
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    newAffirmation({
      text,
      image,
      dateAdded,
      affirmationType,
      title,
      dateAchieved,
      madeMeFeel,
      author
    });
  };

  return (
    <Row>
      <Col xs={12} className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              {!count ? 'Enter your first affirmation! ' : ''}What is one thing
              you're <strong>grateful</strong> for?
            </h2>
            <Notice />
            <Form.Group>
              <Form.Control
                type='text'
                name='achievementType'
                placeholder='Gratitude'
                value={'gratitude'}
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                name='text'
                placeholder='Gratitude'
                onChange={e => onChange(e)}
                value={text}
              />
            </Form.Group>
            <Form.Group className='my-2 custom-file'>
              <Form.Control
                type='file'
                className='custom-file-input'
                onChange={e => onChange(e)}
                value={image}
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

Gratitude.propTypes = {
  user: PropTypes.object.isRequired,
  newAffirmation: PropTypes.func.isRequired,
  setNotice: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

// ! Get the information from state that we need from our reducer
const mapStateToProps = state => ({
  user: state.auth.user,
  count: state.auth.user.affirmations.count
});

// ! Connect takes two parameters: 1. state that you want to map, 2. an object of actions.
// ! Then you pass the maincomponent function

export default connect(
  mapStateToProps,
  { newAffirmation, setNotice }
)(Gratitude);
