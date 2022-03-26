import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';

import App from './App';

ReactGA.initialize('UA-171095156-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

module.hot?.accept();
