import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
      tailwindcss(),
      react()
  ],
  define: {
      'import.meta.env.API_URL': JSON.stringify(process.env.API_URL),
  }
});
