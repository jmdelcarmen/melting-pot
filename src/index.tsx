import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import routes from './routes';

ReactDOM.render(
  <Router history={createHashHistory()}>
    {routes}
  </Router>,
  document.querySelector('#root'),
);
