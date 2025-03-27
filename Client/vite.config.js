import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Permet d'exposer sur le réseau
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000', // Backend en local
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
