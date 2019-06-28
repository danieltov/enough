import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { EnoughNav as Nav } from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class Signup extends Component {
  render() {
    return (
      <div class='form-style'>
        <div class='row'>
          <div class='col-12 col-md-6 d-none d-md-flex justify-content-center align-items-start'>
            <img
              src='assets/img/enough_person2.png'
              class='img-fluid signup-img p-0'
            />
          </div>
          <div class='col-12 col-md-6 d-flex justify-content-center align-items-center'>
            <div class='form-container'>
              <form method='post'>
                <h2 class='text-center'>
                  <strong>Create</strong> an account.
                </h2>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                </div>
                <div class='form-group'>
                  <input
                    class='form-control'
                    type='password'
                    name='password-repeat'
                    placeholder='Password (repeat)'
                  />
                </div>
                <div class='form-group'>
                  <div class='form-check'>
                    <label class='form-check-label'>
                      <input class='form-check-input' type='checkbox' />I agree
                      to the license terms.
                    </label>
                  </div>
                </div>
                <div class='form-group'>
                  <button class='btn btn-primary btn-block' type='submit'>
                    Sign Up
                  </button>
                </div>
                <a href='#' class='already'>
                  You already have an account? Login here.
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
