import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { EnoughNav as Nav } from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
        <Container className='d-flex flex-column align-content-center hero'>
          <Row className='m-3'>
            <Col
              xs={12}
              lg={6}
              xl={5}
              className='offset-xl-1 d-flex flex-column justify-content-center align-items-sm-center align-items-md-start'>
              <h1 className='m-0 font-weight-bold'>
                <strong>Enough.</strong>
              </h1>
              <p>
                An app to store your accomplishments, strengths, and other
                positives in your life. When you need it most, we'll remind you
                that <strong>you are enough. We have the receipts.</strong>
              </p>
              <button
                className='btn btn-light btn-lg action-button'
                type='button'>
                Sign Up
              </button>
            </Col>
            <Col
              xs={12}
              md={5}
              lg={5}
              className='offset-lg-1 offset-xl-0 d-sm-block'>
              <Image
                src='/assets/img/enough_person.png'
                className='mt-3 mt-sm-0'
                fluid
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Landing;
