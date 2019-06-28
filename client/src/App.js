import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import { EnoughNav as Nav } from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Wrapper>
        <Nav />
        <Switch>
          <Container className='d-flex flex-column align-content-center hero'>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Container>
        </Switch>
      </Wrapper>
    </Fragment>
  </Router>
);

export default App;
