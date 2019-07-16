import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../pages/Home';
import RollSpace from '../pages/RollSpace';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rollspace" component={RollSpace} />
      </Switch>
    </Router>
  );
}
