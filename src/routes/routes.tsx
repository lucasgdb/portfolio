import { createBrowserHistory } from 'history';
import React from 'react';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import AppRoutes from './app.route';

const history = createBrowserHistory();

export default function Routes() {
  return (
    <Router history={history}>
      <AppRoutes />
    </Router>
  );
}

history.listen(({ location }) => {
  ReactGA.ga('set', 'page', location.pathname + location.search);
  ReactGA.ga('send', 'pageview');
});
