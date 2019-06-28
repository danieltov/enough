import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import { EnoughNav as Nav } from './components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Wrapper>
  </Router>
);

export default App;
