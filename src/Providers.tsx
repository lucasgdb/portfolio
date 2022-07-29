import { ReactGenieAnimations } from 'react-genie-styled-components';
import { BrowserRouter } from 'react-router-dom';

type ProvidersProps = {
  children: React.ReactChild;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <ReactGenieAnimations />
      {children}
    </BrowserRouter>
  );
}
