import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and related libraries
          'three-vendor': ['three', '@react-three/fiber', '@react-three/postprocessing', 'ogl', 'postprocessing'],
          // Separate animation libraries
          'animation-vendor': ['framer-motion', 'gsap'],
          // Separate UI libraries
          'ui-vendor': ['lucide-react', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'],
          // Separate router
          'router-vendor': ['react-router-dom'],
        },
        // Ensure assets like SVGs have proper naming
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name].[hash].[ext]';
          }
          if (assetInfo.name?.endsWith('.svg')) {
            return 'assets/icons/[name].[hash].[ext]';
          }
          if (assetInfo.name?.endsWith('.png') || assetInfo.name?.endsWith('.jpg') || assetInfo.name?.endsWith('.jpeg') || assetInfo.name?.endsWith('.gif')) {
            return 'assets/images/[name].[hash].[ext]';
          }
          if (assetInfo.name?.endsWith('.woff') || assetInfo.name?.endsWith('.woff2') || assetInfo.name?.endsWith('.ttf')) {
            return 'assets/fonts/[name].[hash].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Add performance optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    // Ensure assets are copied to dist folder
    assetsDir: 'assets',
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  // Asset handling
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.woff', '**/*.woff2'],
});