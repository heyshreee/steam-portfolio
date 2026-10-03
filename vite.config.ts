import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Deploying to a sub-path (e.g. GitHub Pages at https://<user>.github.io/<repo>/)?
  // Uncomment and set it to your repo name:
  // base: '/your-repo-name/',
})