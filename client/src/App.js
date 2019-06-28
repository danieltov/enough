// * ==================== REACT COMPONENTS ==================== *//
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import { EnoughNav as Nav } from './components/Navbar';
import Container from 'react-bootstrap/Container';

// * ==================== VIEWS ==================== *//
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';

// * ==================== REDUX ==================== *//
import { Provider } from 'react-redux';
import store from './store';

// * ==================== STYLES ==================== *//
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Wrapper>
          <Nav />
          <Container className='d-flex flex-column align-content-center hero'>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </Container>
        </Wrapper>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
