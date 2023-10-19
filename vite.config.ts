import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // 'import.meta.env.MODE': process.env.NODE_ENV,
    'import.meta.env.VITE_APP_BACKEND_URL': process.env.VITE_APP_BACKEND_URL
    // 'import.meta.env.VITE_BASE_URL': process.env.VITE_BASE_URL
  }
})
