import { Outlet, useLocation } from 'react-router';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

export default function EnvironmentLayout() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.ga('set', 'page', location.pathname + location.search);
    ReactGA.ga('send', 'pageview');
  }, [location.pathname, location.search]);

  return <Outlet />;
}
