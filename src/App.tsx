import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { AppRoutes } from './routes';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.ga('set', 'page', location.pathname + location.search);
    ReactGA.ga('send', 'pageview');
  }, [location]);

  return <AppRoutes />;
};

export default App;
