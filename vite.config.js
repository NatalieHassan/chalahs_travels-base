import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Generate a unique build ID to force cache invalidation
const BUILD_ID = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || Date.now().toString(36)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Force fresh builds - empty output directory
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Include build ID in filename to force cache invalidation
        entryFileNames: `assets/index-[hash]-${BUILD_ID}.js`,
        chunkFileNames: `assets/[name]-[hash]-${BUILD_ID}.js`,
        assetFileNames: `assets/[name]-[hash]-${BUILD_ID}.[ext]`
      }
    }
  }
})
