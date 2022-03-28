import { ReactGenieAnimations } from 'react-genie-styled-components';
import { BrowserRouter } from 'react-router-dom';

const Providers: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ReactGenieAnimations />
      {children}
    </BrowserRouter>
  );
};

export default Providers;
