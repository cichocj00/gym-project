import { create } from 'zustand';

type Theme = 'dark' | 'light' | 'system';

interface ThemeState {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export const useThemeStore = create<ThemeState>((set) => ({
  setTheme: (theme: Theme) =>
    set(() => {
      localStorage.setItem('vite-ui-theme', theme);
      return { theme };
    }),
  theme: (localStorage.getItem('vite-ui-theme') as Theme) || 'system',
}));
