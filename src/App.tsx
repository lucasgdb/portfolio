import AppRoutes from './routes';
import Providers from './Providers';

export default function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}
