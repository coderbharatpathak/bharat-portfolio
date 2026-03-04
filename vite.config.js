import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// tailwindcss ka import nahi chahiye Vite me
export default defineConfig({
  plugins: [react()],
  base: '/bharat-portfolio/', // GitHub Pages ke liye
})
