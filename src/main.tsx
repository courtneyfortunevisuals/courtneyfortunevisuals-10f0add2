import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register service worker with update handling
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Check for updates every 60 seconds
        setInterval(() => {
          registration.update();
        }, 60000);

        // Listen for waiting service worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker is ready, will activate on next visit
                console.log('New version available');
              }
            });
          }
        });
      })
      .catch(() => {
        // Service worker registration failed silently
      });

    // Listen for cache update messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        console.log('Cache updated to version:', event.data.version);
        // Automatically reload to apply updates after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
