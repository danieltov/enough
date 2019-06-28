import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { EnoughNav as Nav } from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css';

class Dashboard extends Component {
  render() {
    return (
      <Container className='d-flex flex-column align-content-center hero'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center mt-0'>How are you feeling today?</h1>
          </div>
        </div>
        <div className='col' />
        <div className='row m-3 mt-5'>
          <div className='col-sm-12 col-md-4'>
            <h1 className='text-center mt-0 dash-icon'>
              <i className='fas fa-laugh-beam' />
            </h1>
          </div>
          <div className='col-sm-12 col-md-4'>
            <h1 className='text-center mt-0 dash-icon'>
              <i className='fas fa-meh' />
            </h1>
          </div>
          <div className='col-sm-12 col-md-4'>
            <h1 className='text-center mt-0 dash-icon'>
              <i className='fas fa-frown' />
            </h1>
          </div>
        </div>
      </Container>
    );
  }
}

export default Dashboard;
