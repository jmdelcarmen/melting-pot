import * as React from 'react';
import { Route, Redirect } from 'react-router';

// Layouts
import withMainLayout from './components/Layouts/MainLayout';

// Pages
import Home from './components/Pages/Home';

export default (
  <div>
    <Route exact path="/" component={withMainLayout(Home)} />
  </div>
);
