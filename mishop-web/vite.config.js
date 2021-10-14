import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const srcPath = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server:{
    host:"0.0.0.0",
    proxy:{
      '/api': 'http://localhost:2001/'
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: srcPath },
    ],
  },
});