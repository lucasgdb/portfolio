import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingPage from '~/pages/Loading/LoadingPage';

const LandingPage = lazy(() => import('~/pages/Landing/LandingPage'));
const Error404Page = lazy(() => import('~/pages/Error/Error404Page'));

const AppRoutes = () => (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="*" component={Error404Page} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
