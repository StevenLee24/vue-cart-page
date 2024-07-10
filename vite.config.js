import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/vue-cart-page/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-cart-page/' // replace 'your-repo-name' with the name of your GitHub repository
    : '/'
  //  publicPath: '/vue-cart-page/'
})
