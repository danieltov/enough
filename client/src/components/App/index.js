// * ==================== REACT COMPONENTS ==================== *//
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from '../Wrapper';
import PrivateRoute from '../routing/PrivateRoute';
import EnoughNav from '../Navbar';
import Container from 'react-bootstrap/Container';

// * ==================== REDUX ==================== *//
import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../actions/auth';
import setAuthToken from '../../utils/setAuthToken';

// * ==================== STYLES ==================== *//
import './App.css';

// * ==================== LAZY VIEWS ==================== *//

const Landing = lazy(() => {
  return Promise.all([
    import('../pages/guest/Landing'),
    new Promise(resolve => setTimeout(resolve, 750))
  ]).then(([moduleExports]) => moduleExports);
});

const Login = lazy(() => {
  return Promise.all([
    import('../pages/guest/Login'),
    new Promise(resolve => setTimeout(resolve, 500))
  ]).then(([moduleExports]) => moduleExports);
});

const Signup = lazy(() => {
  return Promise.all([
    import('../pages/guest/Signup'),
    new Promise(resolve => setTimeout(resolve, 500))
  ]).then(([moduleExports]) => moduleExports);
});

const Dashboard = lazy(() => {
  return Promise.all([
    import('../pages/user/Dashboard'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ]).then(([moduleExports]) => moduleExports);
});

const Affirmation = lazy(() => {
  return Promise.all([
    import('../pages/user/Affirmation'),
    new Promise(resolve => setTimeout(resolve, 500))
  ]).then(([moduleExports]) => moduleExports);
});

const Affirm = lazy(() => {
  return Promise.all([
    import('../pages/user/Affirm'),
    new Promise(resolve => setTimeout(resolve, 500))
  ]).then(([moduleExports]) => moduleExports);
});

// * Check to see if there's a token in localStorage
if (localStorage.token) {
  // * If token, set global header
  setAuthToken(localStorage.token);
}

// * ==================== LOGIC ==================== *//
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={
            <div className='ipl-progress-indicator' id='ipl-progress-indicator'>
              <div className='ipl-progress-indicator-head'>
                <div className='first-indicator' />
                <div className='second-indicator' />
              </div>
              <div className='insp-logo-frame' />
            </div>
          }>
          <Wrapper>
            <EnoughNav />
            <Container className='d-flex flex-column align-content-center hero'>
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/affirm' component={Affirm} />
                <PrivateRoute path='/affirmation' component={Affirmation} />
              </Switch>
            </Container>
          </Wrapper>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
