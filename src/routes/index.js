import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterLogin from '../pages/RegisterLogin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={RegisterLogin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
