import { useTheme } from '@/hooks/useTheme';

import AppProvider from './AppProvider';
import AppRouter from './routes/AppRouter';

function App() {
  useTheme();

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
