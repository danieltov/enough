import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { EnoughNav as Nav } from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class Login extends Component {
  render() {
    return (
      <div className='form-style'>
        <div className='row'>
          <div className='col-12 col-md-6 d-none d-md-flex justify-content-end align-items-center'>
            <img
              src='assets/img//enough_person3.png'
              className='img-fluid signup-img'
            />
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-start align-items-center'>
            <div className='form-container'>
              <form method='post'>
                <h2 className='text-center'>
                  <strong>Login</strong> to your account.
                </h2>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group'>
                  <button className='btn btn-primary btn-block' type='submit'>
                    Login
                  </button>
                </div>
                <a href='#' className='already'>
                  Don't have an account? Signup here.
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
