import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import AppRoutes from './routes';
import Providers from './Providers';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.ga('set', 'page', location.pathname + location.search);
    ReactGA.ga('send', 'pageview');
  }, [location]);

  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}
