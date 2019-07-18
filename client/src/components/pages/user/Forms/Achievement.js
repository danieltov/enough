import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { newAffirmation } from '../../../../actions/aff';
import { setNotice } from '../../../../actions/notice';

import { Row, Col, Form, Button } from 'react-bootstrap';
import Notice from '../../../Notice';

const Achievement = ({ newAffirmation, setNotice, count, history }) => {
  const [formData, setFormData] = useState({
    text: '',
    affirmationType: 'achievement',
    title: '',
    dateAchieved: '',
    madeMeFeel: ''
  });

  const { text, title, dateAchieved, madeMeFeel } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    newAffirmation(formData, history);
  };

  return (
    <Row className='d-flex justify-content-center align-items-center'>
      <Col
        xs={12}
        md={9}
        className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              {!count ? 'Enter your first affirmation! ' : ''}What is an{' '}
              <strong>achievement</strong> you are proud of?
            </h2>
            <Notice />
            <Form.Group>
              <Form.Label htmlFor='title'>
                Enter an achievement from your life&mdash;a moment you are
                particularly proud of.
              </Form.Label>
              <Form.Control
                type='text'
                name='title'
                placeholder='Example: I graduated from my coding bootcamp'
                onChange={e => onChange(e)}
                value={title}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='text'>
                Why did this moment make you proud?
              </Form.Label>
              <Form.Control
                as='textarea'
                name='text'
                placeholder='Example: I challenged myself and accomplished my goals.'
                onChange={e => onChange(e)}
                value={text}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='madeMeFeel'>
                With one or a few words, finish the sentence: This achievement
                made me feel...
              </Form.Label>
              <Form.Control
                type='text'
                name='madeMeFeel'
                placeholder='Example: Like I could do anything!'
                onChange={e => onChange(e)}
                value={madeMeFeel}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='dateAchieved'>Date Achieved:</Form.Label>
              <Form.Control
                type='date'
                name='dateAchieved'
                onChange={e => onChange(e)}
                value={dateAchieved}
              />
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

Achievement.propTypes = {
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
)(withRouter(Achievement));
