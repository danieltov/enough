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
    <Row>
      <Col xs={12} className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              {!count ? 'Enter your first affirmation! ' : ''}What is an{' '}
              <strong>achievement</strong> you are proud of?
            </h2>
            <Notice />
            <Form.Group>
              <Form.Control
                type='text'
                name='title'
                placeholder='Achievement'
                onChange={e => onChange(e)}
                value={title}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as='textarea'
                name='text'
                placeholder='Description'
                onChange={e => onChange(e)}
                value={text}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                name='madeMeFeel'
                placeholder='Compelete the sentence. This achievement made me feel...'
                onChange={e => onChange(e)}
                value={madeMeFeel}
              />
            </Form.Group>
            <Form.Label>
              <Form.Label htmlFor='dateAchieved'>Date Achieved:</Form.Label>
              <Form.Control
                type='date'
                name='dateAchieved'
                onChange={e => onChange(e)}
                value={dateAchieved}
              />
            </Form.Label>

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
