import React from 'react';
import logo from './logo.svg';
import './App.css';
import SessionContainer from './components/login-sign-up-container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/register" component={SessionContainer} />
    </Switch>

  </div>
)

export default App;
