import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Add other plugins as needed

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: './postcss.config.js',
  },
});
