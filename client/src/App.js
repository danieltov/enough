// * ==================== REACT COMPONENTS ==================== *//
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Wrapper from './components/Wrapper';
import EnoughNav from './components/Navbar';
import Container from 'react-bootstrap/Container';

// * ==================== VIEWS ==================== *//
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Affirmation from './pages/dashboard/Affirmation';

// * ==================== REDUX ==================== *//
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// * ==================== STYLES ==================== *//
import './App.css';

// * ==================== LOGIC ==================== *//

// * Check to see if there's a token in localStorage
if (localStorage.token) {
  // * If token, set global header
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <EnoughNav />
          <Container className='d-flex flex-column align-content-center hero'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/affirm' component={Affirmation} />
            </Switch>
          </Container>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
