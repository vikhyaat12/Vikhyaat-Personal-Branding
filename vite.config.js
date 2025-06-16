import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public', // 👈 make sure images are inside /public
  build: {
    outDir: 'dist'
  }
});
