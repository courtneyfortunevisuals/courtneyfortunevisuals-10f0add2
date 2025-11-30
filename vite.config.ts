import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Source map configuration
    sourcemap: mode === 'development',
    // Minification for production
    minify: mode === 'production' ? 'terser' : false,
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: ['log'],
        drop_debugger: true,
      },
    } : undefined,
    rollupOptions: {
      output: {
        // Enhanced chunk splitting for optimal caching
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // UI components and Radix
          if (id.includes('node_modules/@radix-ui') || id.includes('components/ui')) {
            return 'ui-components';
          }
          // Heavy libraries
          if (id.includes('node_modules/recharts')) {
            return 'charts';
          }
          // Locomotive scroll
          if (id.includes('node_modules/locomotive-scroll')) {
            return 'locomotive';
          }
          // Query and state management
          if (id.includes('node_modules/@tanstack') || id.includes('node_modules/zustand')) {
            return 'state';
          }
          // Other vendor code
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  // Security: prevent .env files from being included in build
  define: {
    'process.env': {},
  },
}));
