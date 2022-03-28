import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';

import App from './App';
import Providers from './Providers';

ReactGA.initialize('UA-171095156-1');

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Providers>
    <App />
  </Providers>
);

module.hot?.accept();
