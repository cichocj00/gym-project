import { create } from 'zustand';

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export type Theme = Themes.DARK | Themes.LIGHT | Themes.SYSTEM;

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
