import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

import PageLoader from './components/PageLoader';
import EnvironmentLayout from './layout/EnvironmentLayout';

const LandingPage = lazy(() => import('./pages/Landing/LandingPage'));
const Error404Page = lazy(() => import('./pages/Error/Error404Page'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<EnvironmentLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
