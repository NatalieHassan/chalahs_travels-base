import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Force fresh builds - empty output directory
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Standard hash-based naming (Vite will generate new hash if content changes)
        entryFileNames: `assets/index-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  }
})
