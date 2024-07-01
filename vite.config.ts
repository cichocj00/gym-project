import react from '@vitejs/plugin-react';
// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line unicorn/prefer-module
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// __dirname is not available in ESM, so we use import.meta.dirname instead
