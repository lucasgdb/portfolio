import { ReactGenieAnimations } from 'react-genie-styled-components';
import { HashRouter } from 'react-router-dom';

type ProvidersProps = {
  children: React.ReactChild;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <HashRouter>
      <ReactGenieAnimations />
      {children}
    </HashRouter>
  );
}
