import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

import LoadingPage from './pages/Loading/LoadingPage';

const LandingPage = lazy(() => import('./pages/Landing/LandingPage'));
const Error404Page = lazy(() => import('./pages/Error/Error404Page'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Suspense>
  );
};
