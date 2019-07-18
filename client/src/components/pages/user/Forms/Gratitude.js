import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { newAffirmation } from '../../../../actions/aff';
import { setNotice } from '../../../../actions/notice';

import { Row, Col, Form, Button } from 'react-bootstrap';
import Notice from '../../../Notice';

const Gratitude = ({ newAffirmation, setNotice, count, history }) => {
  const [formData, setFormData] = useState({
    text: '',
    affirmationType: 'gratitude'
  });

  const { text } = formData;

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
        md={8}
        className='d-flex justify-content-center align-items-center'>
        <div className='form-container'>
          <Form id='affForm' onSubmit={e => onSubmit(e)}>
            <h2 className='text-center'>
              {!count ? 'Enter your first affirmation! ' : ''}What is one thing
              you're <strong>grateful</strong> for?
            </h2>
            <Notice />
            <Form.Group>
              <Form.Label htmlFor='text'>
                Enter something you're grateful for:
              </Form.Label>
              <Form.Control
                type='text'
                name='text'
                id='gratitudeText'
                placeholder='Example: My dog.'
                onChange={e => onChange(e)}
                value={text}
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
)(withRouter(Gratitude));
