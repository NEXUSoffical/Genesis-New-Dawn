import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Genesis-New-Dawn/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        play: resolve(__dirname, 'play.html')
      }
    }
  }
});
