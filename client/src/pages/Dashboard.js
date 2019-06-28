import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h1 className='text-center mt-0'>How are you feeling today?</h1>
        </Col>
        <Col xs={12}>
          <Row className='m-3 mt-5'>
            <Col xs={12} md={4}>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-laugh-beam dash-icon' />
              </h1>
            </Col>
            <Col xs={12} md={4}>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-meh dash-icon' />
              </h1>
            </Col>
            <Col xs={12} md={4}>
              <h1 className='text-center mt-0 '>
                <i className='fas fa-frown dash-icon' />
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;