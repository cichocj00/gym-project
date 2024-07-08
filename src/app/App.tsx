import { useThemeStore } from '@/store/theme';
import { useEffect } from 'react';

import AppProvider from './AppProvider';
import AppRouter from './routes/AppRouter';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
