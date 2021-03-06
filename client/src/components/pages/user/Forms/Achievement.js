// * ==================== REACT ==================== *//
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// * ==================== REDUX ==================== *//
import { connect } from 'react-redux';
import { newAffirmation } from '../../../../actions/aff';
import { setNotice } from '../../../../actions/notice';

// * ==================== VIEW COMPONENTS ==================== *//
import { Row, Col, Form, Button } from 'react-bootstrap';
import Notice from '../../../Notice';

const Achievement = ({ newAffirmation, setNotice, count, history }) => {
  const initState = {
    text: '',
    affirmationType: 'achievement',
    title: '',
    dateAchieved: '',
    madeMeFeel: ''
  };
  const [formData, setFormData] = useState(initState);

  const { text, title, dateAchieved, madeMeFeel } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    newAffirmation(formData, history);
    setFormData(initState);
  };

  return (
    <Row className='d-flex justify-content-center align-items-center'>
      <Col
        xs={12}
        md={9}
        className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form onSubmit={e => onSubmit(e)} autoComplete='off'>
            <h2 className='text-center'>
              {!count ? 'Enter your first affirmation! ' : ''}What is an{' '}
              <strong>achievement</strong> you are proud of?
            </h2>
            <Notice />
            <Form.Group>
              <Form.Label htmlFor='title'>
                Enter an achievement from your life&mdash;a moment you are
                particularly proud of:
              </Form.Label>
              <Form.Control
                type='text'
                name='title'
                placeholder='e.g.: I graduated from a coding bootcamp.'
                onChange={e => onChange(e)}
                value={title}
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='text'>
                Why did this moment make you proud?
              </Form.Label>
              <Form.Control
                as='textarea'
                name='text'
                placeholder='e.g.: I challenged myself.'
                onChange={e => onChange(e)}
                value={text}
                autoComplete='off'
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
                placeholder='e.g.: Like I could do anything!'
                onChange={e => onChange(e)}
                value={madeMeFeel}
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor='dateAchieved'>Date Achieved:</Form.Label>
              <Form.Control
                type='date'
                name='dateAchieved'
                onChange={e => onChange(e)}
                value={dateAchieved}
                autoComplete='off'
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

// * ==================== PROP TYPES ==================== *//
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
