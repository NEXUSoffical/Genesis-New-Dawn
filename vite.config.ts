import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Genesis-New-Dawn/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        studio: resolve(__dirname, 'studio.html'),
        abyss: resolve(__dirname, 'abyss.html'),
        merchant: resolve(__dirname, 'merchant.html'),
        lexicon: resolve(__dirname, 'lexicon.html')
      }
    }
  }
});
