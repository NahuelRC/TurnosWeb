import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
/*  server: {
    proxy: {
      '/api': {
        target: 'https://www.walkerstooltrip.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/ds/api/0.1'),
      },
    },
  },*/
})
