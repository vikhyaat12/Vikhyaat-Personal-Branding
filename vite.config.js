import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'images', // ✅ Serve the /images folder as static
  build: {
    outDir: 'dist'
  }
});
